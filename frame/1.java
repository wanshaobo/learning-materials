import java.util.Random;

public class TestOne {


public static void main(String[] args)
{
  int i = new Random().nextInt(30);//是0-30的数字 3

  int m = 5;//m是倍数    任意i按照m对齐

  int num = i / m * m + (((i % m) < 2.5) ? 0 : 1) * m;

  System.out.println("wgxts i: "+i+" num: "+num);
}

}

document.onkeydown = function(event) {
		    var e = event;
		    if (e.keyCode === 68 || e.keyCode === 83) {
		    	if(e.keyCode === 68){
				    console.log('keydown D');
			    }
			    if(e.keyCode === 83){
				    console.log('keydown S');
			    }
			    keydownOrClick = true
		    }
	    }