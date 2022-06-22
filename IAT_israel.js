define(['pipAPI', 'https://sofibonch.github.io/ST-IAT/try.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Israel', //Will appear in the data.
		    title : {
		      media : {word : 'ישראל'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{image : 'isr1.png'}, 
    			{image : 'isr2.png'}, 
    			{image : 'isr3.png'}, 
    			{image : 'isr4.png'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute2 : 
			{
			name : 'Right', //Attribute label
			title : {
				media : {word : 'ימין'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{image : 'right1.png'},
				{image : 'right2.png'},
				{image : 'right3.png'},
				{image : 'right4.png'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute1 : 
			{
			name : 'Left', //Attribute label
			title : {
				media : {word : 'שמאל'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{image : 'left1.png'},
				{image : 'left2.png'},
				{image : 'left3.png'},
				{image : 'left4.png'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://sofibonch.github.io/ST-IAT/imagesisr/'
  }}
  );
  });
