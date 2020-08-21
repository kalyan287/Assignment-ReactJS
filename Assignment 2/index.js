		var MyGarage = [ 
			"Honda-CB150R","Honda-CBR500","Honda-Activa-150","Honda-Gold-wing","Honda-Navi","Honda-Rebel-300","Honda-Unicorn",
			"Suzuki-Access-125","Suzuki-gixxer-sf","Suzuki-Burgman","Suzuki-GS-150","Suzuki-Hayabusa","Suzuki-Intruder","Suzuki-V-Strom",
			"yamaha-RayZ","yamaha-XSR-155","Yamaha-Fascino","Yamaha-FZs-Fi","Yamaha-NMax-155","Yamaha-MT-15",
			"KTM-390-Adventure","KTM-450-SX","KTM-690-Enduro","KTM-Duke-390","KTM-FREERIDE-250","KTM-RC",
			"RE-Continental-GT650","RE-Thunderbird-350","RE-classic350","RE-Himalayan","RE-Bullet-Electra"];
		
		let fun = () => {
			let text = document.getElementById("input").value;
			text=text.toLowerCase();
			console.log("searching");
			console.log(text);

			for (let i =0; i<MyGarage.length;i++){
				let divs = MyGarage[i];
				//console.log(divs);

				if (divs.toLowerCase().includes(text)){
					console.log(divs);
					document.getElementById(divs).style.display = "block";
				} else {
					document.getElementById(divs).style.display = "none";
				}
			  }
		}

		nodisplay = function(a){
			for (let i = 0; i < a.length; i++) {
  				a[i].style.display = "none";
			}
		}	
		
		display = function(a){
			for (let i = 0; i < a.length; i++) {
  				a[i].style.display = "inline-block";
			}
		}	

		home = function(){
			let r = document.getElementById('root');
			r.style.display = "none";
			let hon= document.querySelectorAll("div.Hondabike");
			let suz = document.querySelectorAll("div.Suzukibike");
			let yam = document.querySelectorAll("div.Yamahabike");
			let kt = document.querySelectorAll("div.KTMbike");
			let roal = document.querySelectorAll("div.RoalEnfieldbike");

			display(hon);
			display(suz);
			display(yam);
			display(kt);
			display(roal);
		}

		Honda = function(){
			let r = document.getElementById('root');
			r.innerHTML = "Honda Motors";
			let hon= document.querySelectorAll("div.Hondabike");
			let suz = document.querySelectorAll("div.Suzukibike");
			let yam = document.querySelectorAll("div.Yamahabike");
			let kt = document.querySelectorAll("div.KTMbike");
			let roal = document.querySelectorAll("div.RoalEnfieldbike");

			display(hon);
			nodisplay(suz);
			nodisplay(yam);
			nodisplay(kt);
			nodisplay(roal);
		}
		Suzuki = function(){
			let r = document.getElementById('root');
			r.innerHTML = "Suzuki Motors";
			let hon= document.querySelectorAll("div.Hondabike");
			let suz = document.querySelectorAll("div.Suzukibike");
			let yam = document.querySelectorAll("div.Yamahabike");
			let kt = document.querySelectorAll("div.KTMbike");
			let roal = document.querySelectorAll("div.RoalEnfieldbike");

			nodisplay(hon);
			display(suz);
			nodisplay(yam);
			nodisplay(kt);
			nodisplay(roal);

		}
		Yamaha = function(){
			let r = document.getElementById('root');
			r.innerHTML="Yamaha Motors"

			let hon= document.querySelectorAll("div.Hondabike");
			let suz = document.querySelectorAll("div.Suzukibike");
			let yam = document.querySelectorAll("div.Yamahabike");
			let kt = document.querySelectorAll("div.KTMbike");
			let roal = document.querySelectorAll("div.RoalEnfieldbike");

			nodisplay(hon);
			nodisplay(suz);
			display(yam);
			nodisplay(kt);
			nodisplay(roal);
		}
		KTM = function(){
			let r = document.getElementById('root');
			r.innerHTML="KTM Motors"

			let hon= document.querySelectorAll("div.Hondabike");
			let suz= document.querySelectorAll("div.Suzukibike");
			let yam= document.querySelectorAll("div.Yamahabike");
			let kt = document.querySelectorAll("div.KTMbike");
			let roal = document.querySelectorAll("div.RoalEnfieldbike");

			nodisplay(hon);
			nodisplay(suz);
			nodisplay(yam);
			display(kt);
			nodisplay(roal);
		}
		RoalEnfield = function(){
			let r = document.getElementById('root');
			r.innerHTML="Roal Enfield Motors"
			
			let hon= document.querySelectorAll("div.Hondabike");
			let suz = document.querySelectorAll("div.Suzukibike");
			let yam = document.querySelectorAll("div.Yamahabike");
			let kt = document.querySelectorAll("div.KTMbike");
			let roal = document.querySelectorAll("div.RoalEnfieldbike");

			nodisplay(hon);
			nodisplay(suz);
			nodisplay(yam);
			nodisplay(kt);
			display(roal);
		}
		