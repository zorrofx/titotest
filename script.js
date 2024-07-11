{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\froman\fcharset0 Times-Roman;\f1\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red22\green26\blue30;\red255\green255\blue255;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c11373\c13333\c15686;\cssrgb\c100000\c100000\c100000;
}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 document.addEventListener("DOMContentLoaded", function() \{\
\'a0 \'a0 const sections = document.querySelectorAll(".section");\
\'a0 \'a0 let currentSection = 0;\
\
\'a0 \'a0 function scrollToSection(index) \{\
\'a0 \'a0 \'a0 \'a0 sections[currentSection].style.transform = "";\
\'a0 \'a0 \'a0 \'a0 currentSection = index;\
\'a0 \'a0 \'a0 \'a0 sections[currentSection].style.transform = "translateY(-100vh)";\
\'a0 \'a0 \}\
\
\'a0 \'a0 document.querySelectorAll("nav a").forEach((anchor, index) => \{\
\'a0 \'a0 \'a0 \'a0 anchor.addEventListener("click", (e) => \{\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 e.preventDefault();\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 scrollToSection(index);\
\'a0 \'a0 \'a0 \'a0 \});\
\'a0 \'a0 \});\
\
\'a0 \'a0 window.addEventListener("wheel", (e) => \{\
\'a0 \'a0 \'a0 \'a0 if (e.deltaY > 0 && currentSection < sections.length - 1) \{\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 scrollToSection(currentSection + 1);\
\'a0 \'a0 \'a0 \'a0 \} else if (e.deltaY < 0 && currentSection > 0) \{\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 scrollToSection(currentSection - 1);\
\'a0 \'a0 \'a0 \'a0 \}\
\'a0 \'a0 \});\
\});\
\pard\pardeftab720\sl300\partightenfactor0

\f1\fs26 \cf3 \cb4 \strokec3 \
}