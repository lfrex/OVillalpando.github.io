# MONSTERTRIVIA

Monstertrivia is a trivia game for horror movie lovers. It tests your knowledge about characters and fun facts from old and new movies. For game purposes, anything before "Night of the living dead" (1968) is considered as "old" or Classic, and after that, everything is new or "modern".

![ Monstertrivia landing page](https://i.imgur.com/LBE1wRC.jpg "Landing page")

## Table of contents

- [Current features](#current-features)
- [Project Objective](#project-objective)
- [Technologies used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [Personal Takeaways](#personal-takeaways)
  * [Headings](#headings)
  * [Paragraphs](#paragraphs)
  * [Breaks](#breaks)
  * [Horizontal Rule](#horizontal-rule)
  * [Emphasis](#emphasis)
    + [Bold](#bold)
    + [Italics](#italics)
  * [Blockquotes](#blockquotes)
  * [Lists](#lists)
    + [Unordered](#unordered)
    + [Ordered](#ordered)
    + [Time-saving Tip](#time-saving-tip)
  * [Code](#code)
    + [Inline code](#inline-code)
    + ["Fenced" code block](#fenced-code-block)
    + [Indented code](#indented-code)
    + [Syntax highlighting](#syntax-highlighting)
  * [Links](#links)
    + [Autolinks](#autolinks)
    + [Inline links](#inline-links)
    + [Link titles](#link-titles)
    + [Named Anchors](#named-anchors)
  * [Images](#images)
  * [Raw HTML](#raw-html)
  * [Escaping with backslashes](#escaping-with-backslashes)
- [Project Objective](#project-objective)
  * [Strikethrough](#strikethrough)
  * [Todo List](#todo-list)
  * [Tables](#tables)
    + [Aligning cells](#aligning-cells)
  * [Footnotes](#footnotes)
    + [Inline footnotes](#inline-footnotes)
  * [Additional Information](#additional-information)
    + [What is markdown?](#what-is-markdown)
    + [Other Resources](#other-resources)
    + [Contributing](#contributing)

<br>
<br>

# Current features

+ The landing page display two buttons to **let you select** the game **options**.

<br>

+ Current game options are:
  - Classics Challenge
  - Modern Terrors Challenge

<br>

+ After selecting the desired option, a new **window pop-up** and will **display** the first question of the challenge.
<br>

+ User must click the radio of the right question, **if no answer is selected, a message** asking for a selection **will be displayed**.
<br>

+ After player completes the ten question of every challenge, `Monstertrivia` will **display automatically it's score**, sending a **message customized according the number of right questions answered**.
<br>

+ After completing the challenge, **user have the option to play again** the same challenge.
<br>

+ At any moment, **user can close the challenge screen and return to the landing page**, where it can switch challenges and start a new game or restart the previous one.

<br>


## Project Objective
<br>

`Monstertrivia` main purpose is, besides providing some fun for horror film lovers, use and test the new abilities I got in the GA Software Engineering Immersive Program, in which I'm currently enrolled. 

For more information about the program, please vistit GA website [here](https://generalassemb.ly/education/software-engineering-immersive-remote).

The levels of completion for this project were defined as follows:
+ Bronze Plan or "Minimum Value Product" 
    - The game can be render it efficiently in a web based browser. 
    - Display the emergent windows after clicking the seleted option button.
    - Question and answer options are populated automatically when emergent windows are displayed.
    - User can select an answer per question, and if it doesn't select any, game send message asking for a valid selection.
    - After completing all the questions, game displayed a message with score achieved.

<br>

+ Silver Plan includes, (besides MVP requirements):
    - The ability to display a personalized image according to the question in turn.
    - Different messages for scores depending on the user score.
    - A "Monster medal" given to the user according its score.

+ Golden Plan includes, besides previous requirements:
    - Time based scores.
    - Score tracking acrros games.
    - A model to form the questions randomly from a kind of a "question repository".
    - Playes competing agains others.

<br>
<br>

## Technologies Used

<br>

+ HTML
+ CSS
+ Javascript

<br>
<br>

# Installation Structions

<br>

1. Fork and clone this [repository](https://github.com/lfrex/project1).
2. Navigate to the directory created.
3. Open index.html file from your terminal.

<br>
<br>

# Personal Takeaways

<br>

This is the first time I do somethinng like this, and it was a very interesting experience. Curiously, I found that the hard part was not exactly the programming itself, but the planning. And I'm saying this because this time I followed all the steps pointed by the trainers (wireframe desdign, pseudocode, etc) before start with coding itself and I was able to progress smoothly towards the final idea, and it was only in the parts I didn't include in my original plan were I went into some trouble. 

Also, this time I applied some of the design concepts we learned in Tracy Osborn's "Design for non-designers" [lecture](https://github.com/lfrex/project1) recommended by the instructors, things like only including two different fonts or "adding more white" (well, in this case, black, because of the target market), so, it was another concept practiced and assimilated.

I thing the most important things I learned with this project are:

+ The importance of previous design planning:
  - Things were smooth until I tried to "improvise". As long as I keep following my original design, everything was going good, but after that, problems start to raise. So, next time I'll made sure everything will be "wireframed" in advance. This helped a lot with the HTML and the CSS styling part.

  ![ Original wireframe drawing for the project](https://i.imgur.com/JZekHcK.jpg "Monstertrivia wireframe")

<br>

+ The importance of the **pseudocode**: 
  - Doign pseudocode before start the programming It really helped a lot to tackle the Javascript part. Obviously, I didn't had the "how" while I was writing the logic flow, but when the time to start the script came, some of the pending questions I had were already answered, so it was no to hard to do the programming.

  ![ Some of the "Pseudocode I did for the project](https://i.imgur.com/BltTwdX.jpg "Pseudocode for Monstertrivia")

<br>

+ **Debugging!**
  - I had a situation in which an excerpt of code just stop working towards the end of the project. I almost panicked, but then I decided it was a good chance to practice some of the "Debuggin Process" we were taught along the course. It was not easy, It took a lot of effort and was time consuming, but at the end, after I found the $%&% extra-letter that was causing the problem, it was very rewarding and satisfactory. Next time I will try to introduce earlier some measures to make the debuggin easier, that's for sure!

<br>

+ **Don't ignore your original designs!**:
  - After things weren¡t working when I started to improvise, I had to erease a lot of code and waste some time I could have used in a better way. Then, I returned to my starting work and found that I already had what I was looking for my final design, and for some reason, I just forget about it. If I have followed my design as it was planned, I could have got a better design, but I ran out of time. So, main takeaway of this is _"I must stick to the wireframe designs (unless something really important make them change) all the time"_.

  ![ ](https://i.imgur.com/XxJJZms.jpg "Forgoten wireframe for Monstertrivia!")

+ **Programming is actually funny!**:
  - Yes, this is a project made for academic purposes, but, as soon as I forget about that and start doing it "just for fun" I found, to my surprise, that it was actually something very fun to do! So, in the future, I'll be trying to not forget that, and keep part of the work for my personal fun.

<br>
<br>

Well, that's it. For sure I enjoyed the experience, and I think I'm goin to work on some `Monstertrivia` improvements in the future, but also, I'll be doing some more other stuff. In fact, looks like I cannot wait for start something else!

<br>
<br>


[markdown]: https://assemble.io/docs/Cheatsheet-Markdown.html
[markdown and documentation]: https://git.generalassemb.ly/jd-seir-6/markdown-and-documentation