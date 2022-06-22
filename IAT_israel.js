define(['pipAPI', 'https://sofibonch.github.io/ST-IAT/try.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'American', //Will appear in the data.
		    title : {
		      media : {word : 'American'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{image : 'amr1.png'}, 
    			{image : 'amr2.png'}, 
    			{image : 'amr3.png'}, 
    			{image : 'amr4.png'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute2 : 
			{
			name : 'Republican', //Attribute label
			title : {
				media : {word : 'Republican'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{image : 'rep1.png'},
				{image : 'rep2.png'},
				{image : 'rep3.png'},
				{image : 'rep4.png'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute1 : 
			{
			name : 'Democrat', //Attribute label
			title : {
				media : {word : 'Democrat'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{image : 'dem1.png'},
				{image : 'dem2.png'},
				{image : 'dem3.png'},
				{image : 'dem4.png'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://sofibonch.github.io/ST-IAT/imagespol/'
  }}
  );
  });
