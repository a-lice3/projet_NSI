function inv(imgData){
	let data=imgData.data;
	let L=data.length;
	for(i=0;i<L;i+=4){
		data[i]=255-data[i];
		data[i+1]=255-data[i+1];
		data[i+2]=255-data[i+2];
		//On ne touche pas au canal alpha
	}
	return imgData;
}
document.getElementById("f_inv").onclick=()=>{
	let imgData=contexte.getImageData(0,0,canevas.width,canevas.height);
	let k=inv(imgData);
	contexte.putImageData(k,0,0);
}

let rouge=imageData.data[index];
let vert=imageData.data[index+1];
let bleu=imageData.data[index+2];
let alpha=imageData.data[index+3];
let listergb=[rouge,vert,bleu]
function saturation1(image, listergb)
{
    for (s=0; j<imageData.height; r++)
    {
      for (r=0; i<imageData.width; s++)
      {
         let index=(i*4)*imageData.width+(j*4);
		 let M=Math.max(rouge,vert,bleu);
		 let m=Math.min(rouge,vert,bleu);
		 let C=M-m;
		 if (M=rouge) {
			let T'=((vert-bleu)/C)%6;
		} else if (M=vert){
			let T'=((bleu-rouge)/C+2)%6;
		} else if (M=bleu) {
			let T'=((rouge-vert)/C+4)%6;
		}
		let T=T'*60
		let L=M
		if (M=0) {
			let S=0
		} else {
			let S=C/M
		}
		let listetsl=[]
		listetsl.push((T,S,L))
	  }
	  return listetsl
	}


function saturation2(image,listetsl)
{
	for (s=0; j<imageData.height; r++)
    {
      for (r=0; i<imageData.width; s++)
      {
         let index=(i*4)*imageData.width+(j*4);
		 let C=L*S
		 let T'=T/60
		 let X=C(1-(Math.abs(T'%2-1)))
		 if (T=0) {
			rouge2=0;
			vert2=0;
			bleu2=0;
		} else if (0<=T'<1){
			rouge2=C;
			vert2=X;
			bleu2=0;
		} else if (1<=T'<2) {
			rouge2=X;
			vert2=C;
			bleu2=0;
		} else if (2<=T'<3) {
			rouge2=0;
			vert2=C;
			bleu2=X;
		}
		else if (3<=T'<4) {
			rouge2=0;
			vert2=X;
			bleu2=C;
		}
		else if (4<=T'<5) {
			rouge2=X;
			vert2=0;
			bleu2=C;
		}
		else if (5<=T'<6) {
			rouge2=C;
			vert2=0;
			bleu2=X;
		}
		let m=L-C
		let listergb2=[]
		listergb2.push((rouge2+m,vert2+m,bleu2+m))
	  }
	}
	return listergb2
}