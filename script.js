var names=new Array();
names[0]="bibek";
names[1]="bibek1";
names[2]="bibek2";
names[3]="bibek3";
names[4]="bibek4";
names[5]="bibek5";
names[6]="bibek6";
names[7]="bibek7";
names[8]="bibek8";
names[9]="bibek9";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='b'|| names[i].charAt(0)==='b'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}