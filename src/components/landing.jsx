import Starter from "./starter";

export default function Landing(){
  return(
    <>
      <Starter 
        first = "explore, find, be curious about your kind of books"
        second = "what do you like?"
        buttonText = "have fun"
        buttonClass = "firsthavefun"
        firstClass = "firstExploreText"
        secondClass = "whatDoYouLike"
        divAlign ={true}
      />
      <Starter
        first = "it’s your bookshelf, customize the shit out of it"
        second = "start searching?"
        buttonText = "have fun"
        buttonClass = "firsthavefun"
        firstClass = "firstExploreText"
        secondClass = "whatDoYouLike"
        divAlign ={false}
      />
      <Starter 
        first = "maintain your reading stats and build a comutnity"
        second = "can you maintain a streak?"
        buttonText = "let’s find out"
        buttonClass = "firsthavefun"
        firstClass = "firstExploreText"
        secondClass = "whatDoYouLike"
        divAlign ={true}
      />
    </>
  )
}