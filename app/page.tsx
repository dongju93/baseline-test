import Typewriter from "@/components/Typewriter"
import VoiceToText from "@/components/VoiceToText"

const handleTextChange = (text: string) => {
  console.log(text);
}

export default function Home() {

  return (
    <div>
      <Typewriter text="Officer KD6 -3.7. Let's begin. Ready?" />
      {/* <VoiceToText onTextChange={handleTextChange} /> */}
    </div>
  )
}
