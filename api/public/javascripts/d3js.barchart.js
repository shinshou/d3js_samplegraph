let data = [
  { year: 2011, value: 45 },
  { year: 2012, value: 47 },
  { year: 2013, value: 52 },
  { year: 2014, value: 70 },
  { year: 2015, value: 75 },
  { year: 2016, value: 78 },
  { year: 2017, value: 70 },
  { year: 2018, value: 50 },
  { year: 2019, value: 52 },
  { year: 2020, value: 45 },
  { year: 2021, value: 67 },
]


// svg描画領域の設定
let svg = d3.select("#chart")
  .append("svg")
  .attr("width", 600)
  .attr("height", 500)

// グラフ描画領域の設定
let margin = 200
let width = svg.attr("width") - margin
let height = svg.attr("height") - margin

// スケールの設定
let xscale = d3.scaleBand().range([0, width]).padding(0.4)
let yscale = d3.scaleLinear().range([height, 0])

// Xスケールの値を設定
xscale.domain(data.map(function (data) {
  return data.year
}))

// Yスケールの値を設定
yscale.domain([0, d3.max(data, function (data) {
  return data.value
})])

// グラフグループの作成
let g = svg.selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", "translate(100,100)")
  .append("rect")
  .attr("class", "bar")
  .attr("x", function (d) {
    return xscale(d.year)
  })
  .attr("y", function (d) {
    return yscale(d.value) - 50
  })
  .attr("width", xscale.bandwidth())
  .attr("height", function (d) {
    return height - yscale(d.value)
  })
  .on("mouseover", onMouseOver)
  .on("mouseout", onMouseOut)

// Xスケールの描画（グループの作成）
let gx = svg.append("g")
  .attr("transform", `translate(100,${height + 50})`)
  .call(d3.axisBottom(xscale))

// Yスケールの描画（グループの作成）
let gy = svg.append("g")
  .attr("transform", `translate(100,50)`)
  .call(d3.axisLeft(yscale).tickFormat(function (d) {
    return "$" + d
  }).ticks(10))

// ラベル（グラフ）
svg.append("text")
  .attr("transform", "translate(100,0)")
  .attr("x", 50)
  .attr("y", 30)
  .attr("font-size", "24px")
  .text("XYZ Foods Stock Price")

// ラベル（X軸）
gx.append("text")
  .attr("transform", `translate(0,0)`)
  .attr("y", height - 250)
  .attr("x", width - 200)
  .attr("text-anchor", "end")
  .attr("font-size", "16px")
  .attr("stroke", "black")
  .text("Year")

// ラベル（Y軸）
gy.append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", 200 - height)
  .attr("y", -50)
  .attr("text-anchor", "end")
  .attr("stroke", "black")
  .attr("font-size", "16px")
  .text("Stroke Price")


// マウスオーバーイベント
function onMouseOver(d, i) {
  d3.select(this).attr("class", "highlight")
  d3.select(this)
    .transition()
    .duration(400)
    .attr("width", xscale.bandwidth() + 5)
    .attr("x", function (d) {
      return (xscale(d.year) - 2.5)
    })
  // .attr("height", function (d) {
  //   return (height - yscale(d.value)) + 10
  // })
  // .attr("y", function (d) {
  //   return (yscale(d.value) - 50) - 10
  // })

  // クリックされた親要素のgにテキストを追加
  d3.select(this.parentElement)
    .append("text")
    .attr('class', 'val') // add class to text label
    .attr('x', function () {
      return xscale(d3.select(this.parentElement).datum().year) + 2.5;
    })
    .attr('y', function () {
      return yscale(d3.select(this.parentElement).datum().value) - 15;
    })
    .text(function () {
      // return ['$' + d.value];  // Value of the text
      return d3.select(this.parentElement).datum().value
    });
}

function onMouseOut(d, i) {
  d3.select(this).attr('class', 'bar');
  d3.select(this)
    .transition()
    .duration(400)
    .attr('width', xscale.bandwidth())
    .attr("x", function (d) {
      return xscale(d.year)
    })
  d3.selectAll('.val')
    .remove()
}
