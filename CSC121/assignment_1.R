replace_one_phrase <- function (text, phrase){
  result <- character(0) #"result" is a dummy variable that prevent data loss in "text"
  i <- 1  #Since I am not using for loop, I need to manually create an "i" to do the count
  j <- 0  #j is for counting how many elements I skipped
  while(i <= length(text)){
    if((text[i] == phrase[1])&&((i+1) <= length(text))&&(text[i+1] == phrase[2])){
      #This is the case that target is found.
      #First we have to combine target elements by using paste.
      result[i-j] <- paste(text[i],text[i+1], sep="_")
      i <- (i+1) # We have checked i and i+1 and they are combined, so we want to skip i+1 in "text".
      j <- j+1 #If we are in this step, means 1 element has been combined, so we increse j.
    }
    else
    {
      #Nothing happened, this "i" and "i+1" don't match the "phrase"
      result[i-j] <- text[i]
    }
    #Increase counter "i" by 1, keep the loop going.
    i <- (i+1)
  }
  text <- result
  return(text)
}

replace_phrases <- function (text,phrase_list){
  #Use a for loop to run the "length of phrase_list" times "replace one phrase"
  for(i in 1:length(phrase_list)){
    text <- replace_one_phrase(text, phrase_list[[i]]);
  }
  return(text)
}


