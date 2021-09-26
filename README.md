# Folio

This project was created during ShellHacks 2021

## Inspiration
We are all really interested in crypto and wanted to build a project around that. We got the pivoted to this idea after seeing all the data we had from the CoinRoutes API and it led to a project about tracking and receiving order information and smart order tracking to best inform users how to buy their desired crypto efficiently.

## What it does
The **Portfolio** section allows our users to track their trades and balances to see live how much they made or loss on a trade. It updates in real time using websockets and calculates their Portfolio worth for each supported coin.
The **Calculator** allows the user to input the coin they wish to buy, the amount they want, and the funding currency (USD only for now). It then provides the user useful data on the order, like the average price and total fees they may incur. They also will see the Smart Order Tracking section which displays a spread of how to best purchase the coin by using a variety of trading venues to receive the best opportunity. This takes into account every exchange the particular coin is available on to give the most accurate SOR.
The **Market** shows real time data and charts on the supported coins, and shows users how the market is behaving in the last 24 hours.

## How we built it
We built the whole app using **React** and took advantage of **material UI** for styling. We relied heavily on the **CoinRoutes API** to fetch all the necessary information and used their **websockets** to get live price data.

## Challenges we ran into
We had to pivot really late and started this app with only 14 hours left in the hackathon. Before we were attempting to build a smart contract app for project management, but progress was going too slow as we were are all new to building smart contracts and were learning as we went. We had very little to show for and needed to switch in order to get a project submitted in time and decided to do this project instead.

## Accomplishments that we're proud of
We are proud of getting the project done so quick and using only half the hackathon. Given more time i'm sure we can improve a lot, but with the obstacles we faced, we overcame them!

## What we learned
We learned working with websockets, using the CoinRoutes API, a bit of mobile development, and a bit about smart contracts.

## What's next for Folio - Crypto Tracker
Definitely adding more features that we didn't have time for. We wanted to support more than just these 8 coins, and also allow for more funding currencies than just USD. We would also like to allow users to send an order directly to their Portfolio after using the calculator if they want to. We also would like to polish the UI since we focused more on functionality than design because of the time.
