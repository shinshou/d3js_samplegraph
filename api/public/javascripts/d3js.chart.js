let data = [5, 10, 12]
let width = 200
scaleFactor = 10
barHeight = 20

// svg描画領域の設定
let graph = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", barHeight * data.length)

// グラフグループの設定
let bar = graph.selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", function (d, i) {
    return "translate(0," + i * barHeight + ")"
  })

// barサイズの設定
bar.append("rect")
  .attr("width", function (d) {
    return d * scaleFactor
  })
  .attr("height", barHeight - 1)

bar.append("text")
  .attr("x", function (d) {
    return (d * scaleFactor)
  })
  .attr("y", barHeight / 2)
  .attr("dy", "35em")
  .text(function (d) {
    return d;
  })

