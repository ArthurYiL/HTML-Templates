myFocus.extend({
	mF_classicHB:function(par){//*********************���仳��ϵ�ж�--�������******************
		var box=this.$(par.id);//���役��ͼ����
		this.addList(box,['txt','num']);//���ul�б�
		var pic=this.$li(box,0),txt=this.$li(box,1),num=this.$li(box,2);//���役��ͼԪ��
		var index=0,n=pic.length,t=par.time*1000;//����ʱ��ز���
		//CSS
		var txtH=par.txtHeight;
		for(var i=0;i<n;i++){
			pic[i].style.cssText="display:none;top:-"+0.1*par.height+"px;left:-"+0.1*par.width+"px;width:"+1.2*par.width+"px;height:"+1.2*par.height+"px;"
			txt[i].style.top=-txtH+'px';
		}
		//PLAY
		eval(this.switchMF(function(){
			myFocus.stop(pic[index]).stop(txt[index]);
			pic[index].style.cssText="display:none;top:-"+0.1*par.height+"px;left:-"+0.1*par.width+"px;width:"+1.2*par.width+"px;height:"+1.2*par.height+"px;"
			txt[index].style.top=-txtH+'px';
			myFocus.slide(num[index],{width:16},10);num[index].className='';
		},function(){
			myFocus.fadeIn(pic[next],20).slide(pic[next],{width:par.width,height:par.height,top:0,left:0},20)
			myFocus.slide(txt[next],{top:0},20);
			myFocus.slide(num[next],{width:26},10);num[next].className='current';
		}))
		eval(this.bind('num','par.trigger',par.delay));
	}
})
//����Ϊ����ͼ�ĵ��ã�������ҳ����λ�õ���
myFocus.setting({
	style:'mF_classicHB',//�����ʽ
	id:'myFocus',//����ͼID
	trigger:'mouseover',//��ť�л�ģʽ��'click'(�������)/'mouseover'(��ͣ����,Ĭ����0.1���ӳ٣�����������Ӳ���'delay:����'����)
	time:4,//�л�ͼƬ��ʱ��������λ��
	txtHeight:0,//���ֲ�ߣ�20Ϊ�Ƽ���0Ϊ����
	width:290,//��(��ͼ)��ע��:��������ͼ�Ŀ���ڻ����ͼƬ��
	height:177//��(��ͼ)��ע��ͬ��
});
