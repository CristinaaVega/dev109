/* Background Theme */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #ffcc66;
    margin: 0;
    padding: 0;
}

/* Main Container */
#container {
    position: relative;
    width: 900px;
    margin: 50px auto;
    padding-top: 20px;
}

/* Header (Title + Subtitle) */
#header {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
}

h1 {
    font-size: 40px;
    color: #333;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
}

p {
    font-style: italic;
    color: #444;
}

/* Content Container (for Blackboard & Teacher) */
#content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 20px;
}

/* Blackboard */
#blackboard {
    background-color: #2f4f4f;
    color: white;
    width: 450px;
    height: 350px;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    font-family: "Courier New", monospace;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}

h2 {
    margin-bottom: 15px;
    text-decoration: underline;
}

#output {
    font-size: 18px;
    line-height: 2;
}

/* Teacher Position */
#teacher {
    width: 200px;
    margin-left: 40px; /* Moves the teacher to the right */
}
