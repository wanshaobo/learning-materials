"http://111.206.23.9:55336/tslive/c14_ls_dabofanglong_cs_1080P_t10/5c36b364.ts?hl_nm=6&hl_cid=RD4ASLI27IKEBPZQPDKQSEY7WBWTOBVI&hl_cp=3&hl_slid=c14_ls_dabofanglong_cs_1080P_t10&hl_slst=10&hl_dl=0&hl_dls=40&hl_dle=60&hl_apptp=ppc&hl_stapp=live&hl_stid=ls_dabofanglong_cs_1080P&hl_sttp=ts&hl_stft=flv&hl_pltp=0&hl_stpr=http&hl_stpt=1935&hl_dp=NB2HI4B2F4XWM3DWNRUXMZJOOZUWIZLPFZUXC2LZNEXGG33NF4&hl_force=0&qd_tvid=664783923&qd_vipres=0&qd_scc=aaab56fdd25aaf430372b17c87354d4c&qd_sc=d7f368ee32f5c6f93e064dcbd753d2be&qd_src=01010031010000000000&qd_ip=ca6c0ef0&qd_uid=1210371404&qd_tm=1541744786361&qd_vip=1"
"http://cache.utovr.com/0da5c59a0d53421b96ae7f272262cca7/L2_fze5why8847jpojx_0000.ts"
"http://cache.utovr.com/0da5c59a0d53421b96ae7f272262cca7/L2_fze5why8847jpojx_0000.ts"
/*
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-ALLOW-CACHE:YES
#EXT-X-TARGETDURATION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:3.000000,
L2_fze5why8847jpojx_0000.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0001.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0002.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0003.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0004.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0005.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0006.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0007.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0008.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0009.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0010.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0011.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0012.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0013.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0014.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0015.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0016.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0017.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0018.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0019.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0020.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0021.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0022.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0023.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0024.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0025.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0026.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0027.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0028.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0029.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0030.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0031.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0032.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0033.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0034.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0035.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0036.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0037.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0038.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0039.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0040.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0041.ts
#EXTINF:3.000000,
L2_fze5why8847jpojx_0042.ts
#EXTINF:2.933333,
L2_fze5why8847jpojx_0043.ts
#EXT-X-ENDLIST

*/
import java.util.Random;

public class TestOne {


	public static void main(String[] args)
{
	int i = new Random().nextInt(30);//是0-30的数字

	int m = 5;//m是倍数    任意i按照m对齐

	int num = i / m * m + (((i % m) < 2.5) ? 0 : 1) * m;

	System.out.println("wgxts i: "+i+" num: "+num);
}

}