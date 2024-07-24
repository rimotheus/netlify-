import { useEffect, useState, useRef, forwardRef, useImperativeHandle } from "react";

// not in use can delete
//either web speech api or mediaspeech api
// Forward ref to access component methods from parent
const MicrophoneComponent = forwardRef((props, ref) => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.webkitSpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    }
  }, []);

  useImperativeHandle(ref, () => ({
    startRecording() {
      if (window.webkitSpeechRecognition) {
        setIsRecording(true);
        recognitionRef.current = new window.webkitSpeechRecognition();
        recognitionRef.current.continuous = true; 
        recognitionRef.current.interimResults = true;
        recognitionRef.current.maxAlternatives = 1; 

        let tempTranscript = ""; 

        recognitionRef.current.onresult = (event) => {
          const { finalTranscript, interimTranscript } = Array.from(event.results)
            .slice(event.resultIndex)
            .reduce(
              (acc, result) => {
                if (result.isFinal) {
                  acc.finalTranscript += result[0].transcript;
                } else {
                  acc.interimTranscript += result[0].transcript;
                }
                return acc;
              },
              { finalTranscript: tempTranscript, interimTranscript: "" }
            );

          tempTranscript = finalTranscript; // Update tempTranscript with the final part
          setTranscript(finalTranscript + interimTranscript);
        };

        recognitionRef.current.onspeechend = () => {
          // Avoid auto reset o
        };

        recognitionRef.current.onend = () => {
          // Restart recognition on end to handle long pauses
          if (isRecording) {
            recognitionRef.current.start();
          }
        };

        recognitionRef.current.start();
      }
    },
    stopRecording() {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        setIsRecording(false);
        props.onTranscriptChange(transcript.trim());
        setTranscript("");
      }
    },
  }));

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);


  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full">
        {isRecording && (
          <div className="w-1/4 m-auto rounded-md border p-4 bg-white text-black">
            <div className="flex-1 flex w-full justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {isRecording ? "Recording" : "Recorded"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isRecording ? "Start speaking..." : "Thanks for talking."}
                </p>
              </div>
              {isRecording && (
                <div className="rounded-full w-4 h-4 bg-red-400 animate-pulse" />
              )}
            </div>

            <div className="border rounded-md p-2 h-fullm mt-4">
              <p className="mb-0">{transcript}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default MicrophoneComponent;