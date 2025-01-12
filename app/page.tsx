import SignUp from "@/components/signUp";
import SignUpRhf from "@/components/signUpRhf";
import SignUpRhfZod from "@/components/signUpRhfZod";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>This one uses react and useState</p>
      <SignUp/>
      <p>This one uses react hook form</p>
      <SignUpRhf/>
      <p>This one uses react hook form and Zod for validation</p>
      <SignUpRhfZod/>
    </div>
  )
}