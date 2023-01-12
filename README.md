# Day 1 Estimating pi using Monte Carlo Simulation

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-yrbo5p)

Monte Carlo simulation is a statistical tool used to estimate the probability of the unkown by using the subset of a population and infering the results about the said population.

This would be a good tool we will use to estimate the value of pi by calculating the probability of random points within a circle inscribed within a square.

## Math

In order to do this we need to understand the area of the circle and the area of the square.

area_of_circle = 2 * pi * r ^ 2
area_of_square = 4 * r ^ 2


We will the proceed to get the ratio of the cirlce to the square

ratio = pi/4 = area_of_circle/area_of_square

One this is done we can uniformly simulate a distribution of points evenly within the our shapes.

pi =~ 4 * points_in_circle/points_in_square
pi =~ 4 * 33 / 43 = 3.0697674418604652 

This gives us a rough estimate of 3 which is close to pi.

A larger sample size will allow us to reach pi more accurately

## Code

We will cut our shape in 4 quarters only giving us a quarter circle for the code since it is easier to use the the corner of the square as a starting point of origin (0,0). This will give us a quarter circle inscribed within a square.

In the following code we will simulate the above calculation by creating a function called random that takes an argument that is the count for our sample size.

  - We declare a variable named pointsInCircle to reprisent the points within the circle with 0.
  - Given the sample size, we proceed to generate random points for within the shape
  - The Math.random is used to generate random values for our x and y coordinates.
  - We then have to calculate the distance of our coordinates by using the Euclidian Distance formula (x-0)^2 + (y-0)^2
  - If the euclidian distance is less than or equal 1 we can conclude that the point is within the radius of the circle (Assuming the radius r is 1). 
  - We then use the formula earlier to return the probability.

```js
function random(size) {
  let inCircle = 0;
  for(let i = 0; i < size; i++) {
    const x = Math.random();
    const y = Math.random();
    euclid = x*x + y*y
    if(euclid < 1){
      inCircle++
    }
  }
  return 4*inCircle/size
}
```