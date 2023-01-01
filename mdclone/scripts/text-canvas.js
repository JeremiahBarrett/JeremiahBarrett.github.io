function addTextToCanvas(canvas, headline, secondaryText, logo, color1, color2, color3) {
    // get the context of the canvas
    var ctx = canvas.getContext('2d');
  
    // set the font and text baseline for the headline
    ctx.font = '40px Arial';
    ctx.textBaseline = 'top';
  
    // set the fill style to the first brand color
    ctx.fillStyle = color1;
  
    // draw the headline on the canvas
    ctx.fillText(headline, 10, 10);
  
    // set the font and text baseline for the secondary text
    ctx.font = '20px Arial';
    ctx.textBaseline = 'top';
  
    // set the fill style to the second brand color
    ctx.fillStyle = color2;
  
    // draw the secondary text on the canvas
    ctx.fillText(secondaryText, 10, 50);
  
    // draw the logo on the canvas
    var image = new Image();
    image.src = logo;
    ctx.drawImage(image, 10, 90);
  
    // set the stroke style to the third brand color
    ctx.strokeStyle = color3;
  
    // draw a border around the canvas
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }
  
  // get the values for the headline, secondary text, logo, and brand colors from the GET parameters
  var headline = getUrlParameter('headline');
  var secondaryText = getUrlParameter('secondaryText');
  var logo = getUrlParameter('logo');
  var color1 = getUrlParameter('color1');
  var color2 = getUrlParameter('color2');
  var color3 = getUrlParameter('color3');
  
  // create an array of canvas elements
  var canvases = [
    document.getElementById('canvas1'),
    document.getElementById('canvas2'),
    document.getElementById('canvas3'),
    document.getElementById('canvas4'),
    document.getElementById('canvas5'),
    document.getElementById('canvas6'),
    document.getElementById('canvas7'),
    document.getElementById('canvas8'),
    document.getElementById('canvas9'),
    document.getElementById('canvas10')
  ];
  
  // add the text and logo to each canvas element
  canvases.forEach(function(canvas) {
    addTextToCanvas(canvas, headline, secondaryText, logo, color1, color2, color3);
  });
  
  // define the getUrlParameter function
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  