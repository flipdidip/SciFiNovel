import { useState, useRef, useEffect } from "react";
import "./ReadableParagraph.css";

interface ReadableParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const ReadableParagraph = ({
  children,
  className = "",
}: ReadableParagraphProps) => {
  const [isReading, setIsReading] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [bestVoice, setBestVoice] = useState<SpeechSynthesisVoice | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Find the best available voice
  useEffect(() => {
    const findBestVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) return;

      // Priority order for voice selection (best to good)
      const voicePreferences = [
        // Premium natural voices
        /neural|premium|enhanced|natural/i,
        // Female voices (often sound more pleasant for narration)
        /female|woman|samantha|alex|victoria|zira/i,
        // English voices with good quality
        /^(?=.*en)(?!.*robot)(?!.*synthetic)/i,
        // Any English voice
        /en-/i,
        // Default system voice
        /default/i,
      ];

      let selectedVoice = null;

      for (const preference of voicePreferences) {
        selectedVoice = voices.find(
          (voice) => preference.test(voice.name) && voice.lang.startsWith("en")
        );
        if (selectedVoice) break;
      }

      // Fallback to first English voice or default
      if (!selectedVoice) {
        selectedVoice =
          voices.find((voice) => voice.lang.startsWith("en")) || voices[0];
      }

      setBestVoice(selectedVoice);
    };

    // Initial load
    findBestVoice();

    // Some browsers load voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = findBestVoice;
    }
  }, []);

  const getText = (): string => {
    if (typeof children === "string") {
      return children;
    }
    // For React nodes, we'll extract the text content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = children?.toString() || "";
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const preprocessText = (text: string): string => {
    return (
      text
        // Add pauses after sentences
        .replace(/([.!?])\s+/g, "$1... ")
        // Add slight pauses after commas
        .replace(/,\s+/g, ", ")
        // Handle dialogue with natural pauses
        .replace(/"/g, "... ")
        // Add emphasis to certain words
        .replace(/\b(TRAPPIST-1|Earth|Alaric|Dr\.|Endeavor)\b/g, "$1")
        // Handle dashes for natural speech flow
        .replace(/—/g, "... ")
        // Ensure proper pronunciation of technical terms
        .replace(/cryo-pod/g, "cryopod")
        .replace(/cryo-sleep/g, "cryosleep")
        .replace(/space-time/g, "spacetime")
    );
  };

  const handleReadAloud = () => {
    if (!("speechSynthesis" in window)) {
      setIsSupported(false);
      return;
    }

    if (isReading) {
      // Stop reading
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    // Start reading
    const rawText = getText();
    const processedText = preprocessText(rawText);
    const utterance = new SpeechSynthesisUtterance(processedText);

    // Use the best available voice
    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    // Enhanced speech settings for natural narration
    utterance.rate = 0.85; // Slower for better comprehension and dramatic effect
    utterance.pitch = 0.95; // Slightly lower pitch for more authoritative/narrative tone
    utterance.volume = 1;

    // Adjust settings based on content type
    if (processedText.includes('"')) {
      // Dialogue - slightly faster and higher pitch
      utterance.rate = 0.9;
      utterance.pitch = 1.05;
    } else if (
      processedText.includes("Dr.") ||
      processedText.includes("TRAPPIST-1")
    ) {
      // Technical content - slower and more deliberate
      utterance.rate = 0.8;
      utterance.pitch = 0.9;
    }

    // Event handlers
    utterance.onstart = () => setIsReading(true);
    utterance.onend = () => {
      setIsReading(false);
      // Clear any remaining speech to prevent conflicts
      window.speechSynthesis.cancel();
    };
    utterance.onerror = (event) => {
      console.log("Speech synthesis error:", event);
      setIsReading(false);
      setIsSupported(false);
    };

    utteranceRef.current = utterance;

    // Ensure speech synthesis is ready
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="readable-paragraph">
      <p className={className}>{children}</p>
      {isSupported && (
        <button
          className={`read-aloud-btn ${isReading ? "reading" : ""}`}
          onClick={handleReadAloud}
          title={isReading ? "Stop reading" : "Read aloud"}
          aria-label={isReading ? "Stop reading" : "Read this paragraph aloud"}
        >
          {isReading ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default ReadableParagraph;
