<script type="text/javascript">
var jumlah_iklan = 3;
var waktu_sekarang = new Date()
var detik = waktu_sekarang.getSeconds()
var pasang_iklan = detik % jumlah_iklan;
pasang_iklan += 1;
if (pasang_iklan == 1) {
url = "https://3.bp.blogspot.com/-2MKcuArq5Uw/WaIBZEujV4I/AAAAAAAANlo/MHHRjxw-kb8VnegXRkBUXLN6zCtuVByhQCLcBGAs/s1600/900x200.jpg";
alt = "IKLAN 1";
title = "TITLE IKLAN 1";
banner = "https://3.bp.blogspot.com/-2MKcuArq5Uw/WaIBZEujV4I/AAAAAAAANlo/MHHRjxw-kb8VnegXRkBUXLN6zCtuVByhQCLcBGAs/s1600/900x200.jpg";
width = "100%";
height = "100%";
}
if (pasang_iklan == 2) {
url = "https://1.bp.blogspot.com/-d3R3lwMwlMI/Wafuk9PRc0I/AAAAAAAANrg/8bMCLVRwjnweF2wWlbRlI3hi53GaTf7QACLcBGAs/s1600/900x200.jpg";
alt = "ALT IKLAN2";
title = "TITLE IKLAN2";
banner = "https://1.bp.blogspot.com/-d3R3lwMwlMI/Wafuk9PRc0I/AAAAAAAANrg/8bMCLVRwjnweF2wWlbRlI3hi53GaTf7QACLcBGAs/s1600/900x200.jpg";
width = "100%";
height = "100%";
}
document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=\"' + alt + '\"></a>');
</script>
