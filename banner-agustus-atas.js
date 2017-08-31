<script type="text/javascript">
var jumlah_iklan = 3;
var waktu_sekarang = new Date()
var detik = waktu_sekarang.getSeconds()
var pasang_iklan = detik % jumlah_iklan;
pasang_iklan += 1;
if (pasang_iklan == 1) {
url = "URL PEMASANG IKLAN";
alt = "ALT IKLAN";
title = "TITLE IKLAN";
banner = "URL BANNER";
width = "300";
height = "250";
}
if (pasang_iklan == 2) {
url = "URL PEMASANG IKLAN";
alt = "ALT IKLAN";
title = "TITLE IKLAN";
banner = "URL BANNER";
width = "300";
height = "250";
}
if (pasang_iklan == 3) {
url = "URL PEMASANG IKLAN";
alt = "ALT IKLAN";
title = "TITLE IKLAN";
banner = "URL BANNER";
width = "300";
height = "250";
}
document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=\"' + alt + '\"></a>');
</script>