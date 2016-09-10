var svg = d3.select("body").append("svg").attr("width", "1000px").attr("height", "1000px");

var radius = [1, 2, 3, 4, 5];

svg.selectAll("circle")
    .data(radius)
    .enter()
    .append("circle")
    .attr({
        "r": function (d, i) {
            return 10 * d;
        },
        "cx": function (d, i) {
            return i * 50;
        },
        "cy": function (d, i) {
            return 500;
        },
        "fill": function (d, i) {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);

            var rgb = "rgb(" + r + "," + g + "," + b + ")";
            return rgb;
        }
    });

    d3.select("#save")
    .on({
        "click":function(){

            var svg = document.querySelector("svg");
            console.log(svg);

            svg2image({
                src:svg,
                dest:"",
                width:1000,
                height:1000
            });
        }
    });