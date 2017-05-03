#+ setup,include=FALSE
source("http://www.cs.utoronto.ca/~radford/csc121/options.r")
#+

#' This is a demonstration script that is used for showing how the 
#' knitr::spin function can be used to run an R script file, producing 
#' an HTML file that contains
#'
#'   * The R commands from the script
#'   * The output of these commands
#'   * All the plots produced by these commands
#'
#' This HTML file can then be viewed with a browser.  This procedure
#' has two advantages:
#'
#'   1. All the results get put in a single file.
#'   2. You can put in "markdown" comments, like these, that 
#'      become nicely formatted text, with bullet points like above, 
#'      or numbered points like here.

# Read a file of numbers from the course web page, and show them all.

data <- scan ("http://www.cs.utoronto.ca/~radford/csc121/data2")
data

# Compute the sample mean and sample standard deviation of the data.

m <- mean(data)
s <- sd(data)

cat("mean:",m,"  standard deviation:",s,"\n")

# Plot the data points, along with a horizontal line at the mean, two 
# dashed lines at the mean plus and minus the standard deviation, and 
# two dotted lines at mean plus and minus twice the standard deviation.

plot(data)

abline (h=m)
abline (h=c(m-s,m+s), lty="dashed")
abline (h=c(m-2*s,m+2*s), lty="dotted")

# Plot a histogram of the data.

hist(data)

#' That's all!
