# auto-model
## Create a model with ease.

Just name your model element with an id.
Add the attribute model="&lt;model Id>" to the model opener.

Add &lt;dp> attribute just "dp" if you want the same Model opener to close the model.
Otherwise add close="&lt;model id>" to the model closer.

Note: The model Opener and closer will be elements you must create yourself. 


##For example. 

<button model="floating-dialogue" dp> Open Dialogue </button>

\<div id="floating-dialogue">\
&nbsp;<button close="floating-dialogue"> X </button>
&nbsp;\<img src="https://placehold.co/600x400">\

&nbsp;\<article>\
&nbsp;&nbsp;\<h2>Case Sensitive</h2>\
&nbsp;&nbsp;\<p>\
      This floating dialogue was created automatically. 
      You can check out our automatic svg icon creator 
      that can create an Icon that can be edited, unlike
      variable svg fonts that can't be edited.
&nbsp;&nbsp;&nbsp;&nbsp;\<a src="https://github.com/legen07/iconstable> IconsTable </a>\
&nbsp;&nbsp;\</p>\
&nbsp;\</article>\
\</div>\
