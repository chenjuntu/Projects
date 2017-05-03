simulate_queue <- function (open_time, rate, low, high){
  i <- rexp(1, rate);
  a <- c();
  b <- c();
  c <- c();
  #Check if the first customer comes in after the open time.
  if(i <= open_time){
    a <- c(i);
    b <- c(0);
    c <- c(i + runif(1,low,high));
    i <- rexp(1, rate);
    while(a[length(a)]+i <= open_time){
      a <- c(a, a[length(a)]+i);
      Count_queue <- 0;
      for(x in 1:length(c))
        if(a[length(a)] < c[x])
          Count_queue <- Count_queue + 1;
      b <- c(b, Count_queue);
      if(a[length(a)] <= c[length(c)])
        c <- c(c, c[length(c)] + runif(1,low,high))
      else
        c <- c(c, a[length(a)] + runif(1,low,high));
      i <- rexp(1, rate);
    }
  }
  Result <- list(a, b, c)
  names(Result)[1] <- "arrival_times";
  names(Result)[2] <- "queue_lengths";
  names(Result)[3] <- "departure_times";
  return (Result);
}

#########################################################
#########################################################

run_simulations <- function (seeds, open_time, rate, low, high){
  Col_seed <- c();
  Col_open_time <- c();
  Col_rate <- c();
  Col_low <- c();
  Col_high <- c();
  Col_served <- c();
  Col_maxqueue <- c();
  Col_avewait <- c();
  Col_overtime <- c();
  for(i in 1:length(seeds)){
    set.seed(seeds[i]);
    Col_seed <- c(Col_seed, seeds[i]);
    Col_open_time <- c(Col_open_time, open_time);
    Col_rate <- c(Col_rate, rate);
    Col_low <- c(Col_low, low);
    Col_high <- c(Col_high, high);
    Temp <- simulate_queue(open_time, rate, low, high);
    Col_served <- c(Col_served, length(Temp$arrival_times));
    Col_maxqueue <- c(Col_maxqueue, max(Temp$queue_lengths));
    Col_avewait <- c(Col_avewait, mean(Temp$departure_times - Temp$arrival_times));
    if(Temp$departure_times[length(Temp$departure_times)] - open_time > 0)
      Col_overtime <- c(Col_overtime, Temp$departure_times[length(Temp$departure_times)] - open_time)
    else
      Col_overtime <- c(Col_overtime, 0);
  }
  A <- as.data.frame(list(seed=Col_seed, open_time=Col_open_time, rate = Col_rate, low = Col_low, high = Col_high, served = Col_served, maxqueue = Col_maxqueue, avewait = Col_avewait, overtime = Col_overtime));
  return(A);
}

#Testing purpose
#seeds <- c(1,12,123,1234,12)
  