<!DOCTYPE html>
<?php 
include('includes/connection.php');
include('includes/session.php');
?>

<html>
  <head>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />

    <title>GO LOCAL</title>
     <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <link rel='stylesheet' type='text/css' href='css/circulate/style.css' />
   <!-- <script type='text/javascript' src='js/jquery-1.8.3.min.js'></script>-->
    <script type='text/javascript' src='js/circulate/jquery.easing.1.2.js'></script>
    <script type='text/javascript' src='js/circulate/jquery.circulate.js'></script>
    <script type='text/javascript' src='js/circulate/example.js'></script>
 
     <script>
    //     $(function(){
    //       $.post("select-franchise.php", function(data){
    //         $( "#firstmenu" ).html( data );
    //       });

    //       $("#firstmenu").change(function(){

    //         var id = $("#firstmenu").val();

    //         $.post("select-branch.php", {id:id}, function(data){
    //              $("#secondmenu").html(data);
    //           });
    //       }).change();
    //     });
     </script>


    <script>
      $(document).ready(function() {
        $( ".rotate" ).click(function() {
                // Set the effect type
                var effect = 'slide';
                // Set the options for the effect type chosen
                var options = { direction: left };
                // Set the duration (default: 400 milliseconds)
                var duration = 500;
                $('#content2').slideToggle(effect, options, duration);
          });       
      });
    </script>
  </head>
  <body>


    <div id="page-wrap">
       <div id="first-col">
      <!-- DESCRIPTION BOX -->
      <div class="wrap">
        <div id="content2">    
              
                <!-- <img src="images/services/logo.png" width="100px" style="vertical-align:middle;"> -->
           
                <div id="services">
                      <span>
                        <img src="images/services/med.png">
                        <div id="description">
                          <b>GO MED</b>
                          <p>Go Med is your local affiliation to 24/7 emergency, medical and patient care services including pharmacy and home delivery of medicines</p>
                        </div>
                      </span>

                      <span>
                        <img src="images/services/assist.png">
                        <div id="description">
                          <b>GO ASSIST</b>
                          <p>Go Assist is your passport to thousands of qualified professionals where you can get immediate help.</p>
                        </div>
                      </span>

                      <span>
                        <img src="images/services/med.png">
                        <div id="description">
                          <b>GO TOUR</b>
                          <p>Go Tour provides access to some of the must-see places for tourists, expats and local to visit.</p>
                        </div>
                      </span>

                      <span>
                        <img src="images/services/assist.png">
                        <div id="description">
                          <b>GO BUY</b>
                          <p>Go buy provides a catalogue of some of the best products the Philippines has to offer.</p>
                        </div>
                      </span>

                      <span>
                        <img src="images/services/med.png">
                        <div id="description">
                          <b>GO SELL</b>
                          <p>Go Sell provides a very simple method of locating buyers for your unwanted items that are for sale.</p>
                        </div>
                      </span>

                      <span>
                        <img src="images/services/assist.png">
                        <div id="description">
                          <b>GO KIDS</b>
                          <p>Go Kids helps you find the best places of entertainment in town for your kids of all ages.</p>
                        </div>
                      </span>
                    </div>
            </div>
            <button class="rotate">VIEW OUR SERVICES</button>
        </div>
              
        </div>

      <div id="second-col">

        <div id="content">

              <!-- FLAGS FIRST LAYER -->
              <!-- <img id="one"><img id="two"><img id="three"><img id="four"><img id="five"><img id="six"><img id="seven"><img id="eight">  -->
            
              <!-- FLAGS SECOND LAYER -->
              <!-- <img id="one1"><img id="two1"><img id="three1"><img id="four1"><img id="five1"><img id="six1"><img id="seven1"><img id="eight1"><img id="nine1">   -->
        
              <?php

                  // include('includes/sessions.php');
                  
                  error_reporting(0);
                  

                  if($_POST['branch'] == "Golocal"){
                     echo '<META HTTP-EQUIV="Refresh" Content="0; URL=http://172.16.0.87/go_local/homepage.php">'; 
                    // header('Location: http://172.16.1.53/go_local/homepage.php');

                  } 
                  else if(!empty($_POST['branch'])){

                    $_SESSION['location'] = $_POST['branch'];
                    $q = "SELECT * from branch where branchId = ".$_SESSION['location'];
                    $res = $db2->query($q); 
                    $fetch = $res->fetch_array();
                    $_SESSION['locationName'] = $fetch['branchName'];

                    //change to meta refresh
                    //header("location: site.php");

                    echo '<META HTTP-EQUIV="Refresh" Content="0; URL=site.php">';  
                  }
                  
              ?>


              <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">

                  <div id="tbl" >
                    
                          <span id="first">
                              <b>Where are you from?</b><br/>
                                <select name="from">
                                  <option value="Philippines">Philippines</option>
                                </select> 
                           </span>
                       
                           <span id="sec">
                              <b>Where do you want to go?</b><br/>
                              <select name="go">
                                <option value="Philippines">Philippines</option>
                            </select></span>
                        
                          <span id="third">
                              <b>Destination:</b><br/>
                              <select name="branch">
                                  <?php 
                                    $getbranch = $db2->query("SELECT * FROM branch");
                                    echo "<option value='Golocal'>Go Local</option>";
                                    while($fetchbranch = $getbranch->fetch_array()){
                                       echo "<option value='".$fetchbranch['branchId']."'>".$fetchbranch['branchName']."</option>";
                                    }
                                  ?>
                              </select>
                          </span>
                       
                        <br/>
                        <br/>
                        <center>
                              <b><input type="submit" name="submit" value="GO!" class="button"></b>
                        </center>
                         </form>
                    </div>

                    <!-- LOGO -->
              <div id="logo">
                <img src="images/services/logo-noback.png" alt="Circulate" width="500px"/>
              </div>
               <span>
                  <center>
                        <p>
                            "GoLocal" leisure and Lifestyle network,
                        </p>
                        <p>
                          designed to make life just that little bit easier for 
                        </p>
                        <p>
                          business people or professionals on the go. 
                        </p>
                  </center>
                  
              </span>
           
          </div>
    </div>
  </div>
    </body>
</html>