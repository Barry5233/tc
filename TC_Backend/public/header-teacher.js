document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\'en\'>");
document.writeln("<head>");
document.writeln("    <meta charset=\'UTF-8\'>");
document.writeln("    <meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0\'>");
document.writeln("    <script type=\'text/javascript\' src=\'jquery/jquery-3.3.1.min.js\'></script>");
document.writeln("    <title>Document</title>");
document.writeln("    <link rel=\'stylesheet\' href=\'css/header.css\'>");
document.writeln("</head>");
document.writeln("<body>");
document.writeln("    <div class=\'nav\'>");
document.writeln("        <div class=\'nav-bg\'>");
document.writeln("            <img src=\'image/navbg.png\' alt=\'navbg\'>");
document.writeln("        </div>");
document.writeln("        <div class=\'logo\'>");
document.writeln("            <img src=\'image/logo.png\' alt=\'logo\'>");
document.writeln("        </div>");
document.writeln("        <nav>");
document.writeln("            <a href=\'index after-teacher.html\'>首頁</a>");
document.writeln("            <a href=\'personal-teacher.html\'>個人資訊</a>");
document.writeln("            <a href=\'upload.html\'>上傳教材</a>");
document.writeln("            <img src=\'image/member.png\' alt=\'member\'>");
document.writeln("        </nav>");
document.writeln("        <div id=\'app\'>");
document.writeln("            {{message}}");
document.writeln("        </div>");
document.writeln("        <script src=\'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.js\'></script>");
document.writeln("        <script>");
document.writeln("            var app = new Vue({");
document.writeln("                el:\'#app\',");
document.writeln("                data:{");
document.writeln("                    message: \'\'");
document.writeln("                }");
document.writeln("            });");
document.writeln("        </script>");
document.writeln("");
document.writeln("    </div>");
document.writeln("</body>");
document.writeln("</html>");