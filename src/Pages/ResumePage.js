import React from 'react';
import CollapsibleContent from '../Components/CollapsibeContent.js';


function ResumePage() {
    return(
    <div style={{ textAlign: 'center' }}>
        <h1> Matthew Lee </h1> 
        <p> Education: Loyola Marymount University - B.S. in Computer Science  (August 2021- May 2025)</p>
        <h2> Academic Projects:</h2>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap: '50px'}}>
        <CollapsibleContent buttonLabel="Minesweeper" bulletPoints={['Worked in a 2 person team to design and build an algorithm which navigates a maze to reach a goal, given information following the rules of minesweeper',
         'Built in Python', ' utilized Resolution Inference, as well as storing and manipulating relevant clauses in a local database']} />
        <CollapsibleContent buttonLabel="Toxicity Filter" bulletPoints={['Uses Naive Bayes Classifiers and Logistic Regression to perform preprocessing over comment text given various data (e.g. income, etc.) about commenter, and returns whether said comment is “toxic” given parameters.',
           '3 person team, used Tetrad to construct data network, Python to build algorithm']} />
        <CollapsibleContent buttonLabel="Wordle Solver" bulletPoints={['Slightly altered version of Wordle which determines a hidden word between 2-14 letters long, with feedback given being edit distance and potential transformations',
         'Created in Java', 'built functions to compute edit distance, then make educated guesses until game completed (under 10 attempts, 96% accuracy']} />
        <CollapsibleContent buttonLabel="Rythm Monkey Heaven" bulletPoints={['Used Javascript and Adobe Animate to recreate a Rhythm Heaven Fever game',
         'complete with score and different poses for each move Original Sprites drawn', 'dynamically synced music to different moves to limit hardcoding entire song']} />
        <CollapsibleContent buttonLabel="MonkeyBot" bulletPoints={['MonkeyBot" content="Discord bot which, when called, would return a picture of a monkey from the PlaceMonkeys API',
         'as well as a related fact sourced from ChatGPT.', 'Bot used Replit Database to store all previous facts for faster reference']} />
        <CollapsibleContent buttonLabel="Compression Algorithm" bulletPoints={['Algorithm which, given a file or bitstring in basic ASCII, could compress or decompress and store by creating encoding maps',
         'Decompressed text stored as Strings in Java, compressed format stored as bytes in Python',
          'Most of algorithm built in Java, utilized Huffman Prefix Tries']} />
        </div>
        <h2> Programming Languages</h2>
        <p> C, C#, Go, Java, Javascript, Python, Swift</p>
        <h2> Tools/Game Engines</h2>
        <p> Blender, Git, Unreal Engine, Unity</p>
        <h2> Relevant Coursework: </h2>
        <p> Advanced Interactive Animation CMSI-3801 Applied Linear Algebra Math-251 Computer Systems Organization CMSI-2120 Discrete Math CMSI-2820</p>
        <p>Algorithms and Analysis CMSI-2130 Artificial Intelligence CMSI-3300 Data Structures CMSI-2210 Mobile Applications CMSI-2200 </p>
    </div>
    )
}

export default ResumePage;