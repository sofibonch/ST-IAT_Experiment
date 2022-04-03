define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Americans', //Will appear in the data.
		    title : {
		      media : {word : 'Americans'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{word : 'amr1.png'}, 
    			{word : 'amr2.png'}, 
    			{word : 'amr3.png'}, 
    			{word : 'amr4.png'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Republican', //Attribute label
			title : {
				media : {word : 'Republican'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word : 'rep1.png'},
				{word : 'rep2.png'},
				{word : 'rep3.png'},
				{word : 'rep4.png'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Democrats', //Attribute label
			title : {
				media : {word : 'Democarats'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word : 'dem1.png'},
				{word : 'dem2.png'},
				{word : 'dem3.png'},
				{word : 'dem4.png'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://sofibonch.github.io/ST-IAT/images/'
  }}
  );
  });
