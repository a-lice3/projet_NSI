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