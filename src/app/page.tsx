import BigIdea from "@/components/Home/BigIdea/BigIdea";
import Criteria from "@/components/Home/Criteria/Criteria";
import Faq from "@/components/Home/FAQ/Faq";
import Rules from "@/components/Home/Rules/Rules";

export default function Home() {
  return (
    <main className=" min-h-screen">
     <BigIdea />
     <Rules />
     <Criteria />
     <Faq />
    </main>
  )
}
