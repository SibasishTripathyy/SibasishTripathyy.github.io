
document.getElementById("startButton").onclick = function() {
           
                var ctr = 1;
            
                var totalTime = 0;
                var avgTime = 0;
            
                document.getElementById("startButton").style.display = "none";
                
                var t0 = performance.now();
                
                var bestTime = 50000;
                
                  function getRandomColor() {
                        
                        var letters = '0123456789ABCDEF';
                        var color = '#';
                        for (var i = 0; i < 6; i++ ) {
                            color += letters[Math.floor(Math.random() * 16)];
                        }
                        
                        return color;
                        
                    }

                function appearance() {
                    
                    document.getElementById("shape").style.backgroundColor = getRandomColor();

                    var width = (Math.random() * 100) + 100;
                                        
                    var position = Math.random() * 180;
                    var positionLeft = Math.random() * 800;
                    
                    if(Math.random() > 0.5) {
                        
                        document.getElementById("shape").style.borderRadius = "50%";
                        
                    }
                    
                    else {
                        
                        document.getElementById("shape").style.borderRadius = "0%";
                        
                    }

                    document.getElementById("shape").style.top = position + "px";
                    document.getElementById("shape").style.left = positionLeft + "px";
                    
                    document.getElementById("shape").style.height = width + "px";
                    document.getElementById("shape").style.width = width + "px";

                    document.getElementById("shape").style.display = "block";

                    t0 = performance.now();

                }

                setTimeout(appearance, Math.random() * 1000);

                document.getElementById("shape").onclick = function() {
                    
                    document.getElementById("shape").style.display = "none";
                    
                     var t1 = performance.now();

                        var timeTaken = (t1- t0)/1000;
                                                
                        if(bestTime > timeTaken) {
                            
                            bestTime = timeTaken;
                    
                }
                    
                        document.getElementById("timeTaken").innerHTML = timeTaken.toFixed(3) + "s";
                        document.getElementById("bestTimeTaken").innerHTML = bestTime.toFixed(3) + "s";
                        
                        totalTime = totalTime + timeTaken;
                        avgTime = totalTime/ctr;
                        document.getElementById("avgTimeTaken").innerHTML = avgTime.toFixed(3) + "s";
                        
                        document.getElementById("trials").innerHTML = ctr;
                        ctr++;
                        
                        setTimeout(appearance, Math.random() * 700);

                }
                
            }
        
