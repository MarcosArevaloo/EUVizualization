<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Final Project</title>
    <script src="https://code.highcharts.com/maps/highmaps.js"></script>
    <script src="https://code.highcharts.com/maps/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/mapdata/custom/european-union.js"></script>
    <link rel="stylesheet" href="europeee.css">
    <script src="https://code.highcharts.com/maps/highmaps.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/offline-exporting.js"></script>
    <script src="https://code.highcharts.com/mapdata/custom/europe.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <script src="e3.js"></script> 
    <script src="e2.js"></script>
    <script src="europee.js"></script>
      <!--      <script src="europee.js"></script> --> 
         <!--      <script src="europee.js"></script> --> 


</head>

<body>

    <h1>
        The Eurpean Union: A Quick Vizualization
    </h1>
    <h2>A Project by Marcos Arevalo (DSC 106)</h2>

    <p>    The European Union (EU) sits at the height of political power in the European continent. Composed of the 27
        countries shaded blue below, the EU is the economic and political powerhouse that controls much of the European 
        continent. Each member gets a certain amount of votes that go into its representation in the Union,
        similar to the U.S. House of Representatives in regards to stateship and votes in the House. With new countries applying for
        membership, it is important to understand not only the political distribution of the EU, but its economic
        distributuon as well. First, let us understand the very basic of the political power distribution: Parliamentary votes.
        In a straightforward relationship, the more Parliament votes a country has, the more power it holds in the EU. Below,
        you can hover above a EU state to get an exact count of each countries' Parliamentary vote count.
    </p>
    <br>
    <div id="c1" ></div>
    <p>    Seeing the distribution of Parliamentary votes across the EU, we can see some expected results. It is well-known that
        , France and Germany for example, are among two of the major leaders of the EU and thus hold a large amount of votes. Likewise, we see that
        newer members of the EU, like Bulgaria, hold dramatically less votes. However, is this due to seniority, or is there some other factor
        that could be more representative of why some countries hold more power than others? To better understand this relationship, we turn to the 
        graph below, which graphs GDP per Capita and Population, while the size of the bubble represents the amount of Parliamentary votes
        that country holds. 
    </p>
    <br>

<div id="container"></div>

<p>     As can be seen from the graph above, we can see somewhat of a stronger correlation between population and Parliamentary seats
    as opposed to GDP per capita and seats. To clarify, GDP per capita is defined as the Gross Domestic Product per person,
    which is the straightforward division of the total GDP by the total population of a country, which in short can be used as an estimate
    to the average wealth on average per citizen of that country.  This can be especially seen by Luxembourg, the uppermost point that produces over a whopping $100,000
    GDP per capita, yet holds only 6 seats in parliament as it is one of the smaller EU countries. Likewise, we see further
    evidence of this trend with the larger countries of Italy, France, Germany, and Spain, who in addition to being four of the largest
    countries in the EU also hold a large percentage of the seats.

</p>
<p>
    Having seen this correlation in political power, it is also important to see if a similar pattern emerges in respect to an economic
    perspective. We have looked at GDP per capita, but this is not always representative of the true economic situation in a country. More importantly, newer members 
    know that it takes time and growth to acquire more political power in the EU, but will the EU itself help them grow? To determine whether the EU actually helps
    countries grow economically, we turn to the bubble graph below, which analyzes raw GDP (in dollars) in comparison to the year in which each member
    joined.
</p>
<br>

<div id="c3" style="height: 600px; min-width: 500px; max-width: 600px; margin: 0 auto"></div>
<p>
    From the graph above, we see that the older countries have far greater GDP than any of the other countries (with the one exception being Spain).
    We also see that the newer countries, Bulgaria and Romania, hold some of the lower GDP totals in comparison to the other EU countries. Although it is not the case
    for every single country, it is consistent and apparent enough to where it can be seen as a correlation. 
</p>


<p>
    Through this, we see that the EU holds many intricacies and complexities that make it difficult to navigate its political and economical structure. 
    However, we have seen a positive correlation between GDP per Capita and Population, which also seems to have a positive correlation in combination with
    Parliamentary vote count. Additionally, we have seen that the longer a EU country has stayed in the EU, the bigger and more powerful they seem to grow, at least 
    in comparison with other members. Because of this, joining the EU has become a coveted goal that many countries actively pursue.
</p>
</body>
</html>
