<?php
    $people = array("")
        $name = $_POST["name"];
        echo "helllo," . $name;
    
    
?>


<html>
<head>
    <title>Hello</title>
</head>

<body>
    
      <form action=checklogin.php method="post">
       <div>
          Enter realm: <input name="name" type="text">
          <input type="submit">
          </div>
      </form>
       
        <input type=button onClick="parent.location='index.html'" value='nazaj'>
       
</body>

</html>