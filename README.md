# SELab-Docker

## توضیحات معماری
### شکل کلی معماری میکروسرویس در نظر گرفته شده به صورت زیر است:

![microservice drawio](https://github.com/royaghavami/SELab-Docker/assets/59202308/347eb297-125d-40d3-8e71-abe65e76669c)


### به طور کلی٫ سه سرویس داریم:
- سرویس api gateway (که در فولدر gateway پیاده سازی آن انجام شده)
- سرویس App
- سرویس دیتابیس

### در ادامه به توضیح هر یک از این سرویس ها میپردازیم:
#### سرویس api gateway
وظیفه این سرویس (به طور کل در تعریف کلی) این است که ریکوست ها را از یک محیط پابلیک (external) وارد محیط داخلی (internal) بکند و به عبارتی با انجام انجام عملیات های authentication, authorization, سایر ولیدیشن ها را انجام میدهد و... در نهایت یک ریکوست مطمن را وارد سیستم internal میکند. 
#### سرویس app
این سرویس عملیات خواندن و نوشتن و... را روی سرویس دیتابیس انجام می دهد.
#### سرویس دیتابیس
در این پروژه postgres را به عنوان سرویس دیتابیس انتخاب کردیم.


## توضیحات پروژه
در اینجا عملیات های crud در نهایت بر روی یک تیبل دیتابیس با نام toturial انجام میشود. در ادامه به توضیح مراحل طی شده می پردازیم:
- ابتدا rest api ها را ساختیم که میتوانند عملیات create retrieve, update, delete و find عه toturial ها را انجام دهند. سرویس ها با node js نوشته شده اند و از فریم وورک express استفاده شده
- در فولدر app/controller می توانید عملیات های crud پیاده سازی شده زیر را مشاهده کنید:
create
findAll
findOne
update
delete
deleteAll
findAllPublished
- سرویس app روی پورت ۴۰۰۰ و سرویس gateway روی پورت ۸۰۸۰ اجرا می شوند. در واقع روی این پورت به ریکوست ها گوش میکنند.
- در ادامه config های مربوط به دیتابیس را انجام داده و مدل toturial را به کمک Sequelize نوشتیم.
- سپس Dockerfile ها برای هر یک از سرویس ها نوشته و در نهایت docker-compose.yml را طبق استانداردهایی که در داکیومنتیشن وجود دارد مینویسیم.
- در نهایت تست های مربوطه را به کمک postman انجام میدهیم.
- فهرست api های پیاده سازی شده:

* GET	api/tutorials
* GET	api/tutorials/:id
* POST	api/tutorials
* PUT	api/tutorials/:id
* DELETE	api/tutorials/:id
* DELETE	api/tutorials
* GET	api/tutorials/published
* GET	api/tutorials?title=[title]

### تصاویر مربوط به build شدن داکرفایل ها:
<img width="1440" alt="docker-build-1" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/9033bd22-b9c7-4451-b578-153b45c21b06">
<img width="1440" alt="docker-build-2" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/e3eab1a6-df3a-45e3-9f58-6b6458212fe6">


### تصویر container ها با اجرای دستور docker ps:
<img width="1440" alt="docker-containers" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/b1456cd4-7cc2-40cc-a46a-76ac398a1c80">

<img width="1440" alt="docker-container-2" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/20a11b3e-515f-4250-9b2e-70787b3dd719">




### تصویر image ها با اجرای دستور docker image ls:
<img width="1440" alt="docker-images" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/567b0597-0033-4600-b2c3-557661a7d4cb">

### برای دیپلوی کردن پروژه نیز می توان از سایت گفته شده "play with docker" استفاده کرد. ابتدا باید image های سرویس هایمان را در docker hub پوش کنیم:
<img width="1440" alt="Screenshot 1402-06-06 at 21 27 00" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/5807d3fe-ce45-463e-b3b6-140467bd78a0">


<img width="1440" alt="Screenshot 1402-06-06 at 21 27 08" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/1e70c5e5-99c6-4653-8f7f-90b884fd9362">

### حال باید فایل docker-compose.yml خود را به این شکل تغییر دهیم (در واقع به جای build آدرس image را قرار دهیم که برای اینکار ابتدا باید به اکانت داکرهاب خود لاگین کنیم):
<img width="1440" alt="Screenshot 1402-06-06 at 23 34 13" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/717b37f4-b07c-4695-9e17-bc1c50fc84f0">

<img width="1440" alt="Screenshot 1402-06-06 at 23 34 22" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/3fbbd321-167c-4fe3-a7cb-a6d6820131ce">

حال این فایل را می توانیم در سایت گفته شده قرار دهیم و بعد از انجام دستور docker compose up -d برای هر یک از سرویس ها مشاهده خواهیم کرد که روی پورت های متفاوت بر روی یک public ip در حال اجرا هستند
<img width="1440" alt="Screenshot 1402-06-06 at 21 30 26" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/e30d3641-5c00-43f6-b011-1e45c16bd8ee">

<img width="1440" alt="Screenshot 1402-06-06 at 21 31 22" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/f36754df-07fa-482c-8d55-92c361eb0c71">

<img width="1440" alt="Screenshot 1402-06-06 at 21 31 36" src="https://github.com/royaghavami/SELab-Docker/assets/59202308/e3a5b551-70cf-436c-a18e-6df3b9228dc6">


### نهایتا نیز با یک imageعه ingress enginx می توان پروژه را به محیط پروداکشن برد ( و مشکل مربوط به load balancing را هندل کرد که اینجا نکردیم:))

## پاسخ به سوالات
### سوال ۱
برای مدل سازی معماری microservice می‌توان از نمودارهای UML زیر استفاده کرد اما به طور کلی می توان گفت بهترین روش برای نمایش این سرویس‌ها، استفاده از نمودار Component است که هر سرویس را به عنوان یک واحد ماژولار با رابط‌های دقیق و جایگزین‌پذیر در محیط خود تعریف می‌کند. این مفهوم به زمینه توسعه مبتنی بر مولفه و ساختاردهی سیستم مبتنی بر مولفه پرداخته است. و نمودار بالا نیز از این نوع نمودار است.
1. نمودار کلاس (Class Diagram): این نمودار برای نمایش کلاس‌ها و روابط بین آنها در معماری microservice مفید است. برای هر سرویس، کلاس‌های مرتبط و رابطه آنها می‌توان در این نمودار نشان داد.
2. نمودار کامپوننت (Component Diagram): این نمودار برای نمایش کامپوننت‌ها (سرویس‌های معماری microservice) و وابستگی‌های آنها مفید است. هر کامپوننت می‌تواند شامل یک یا چند سرویس باشد.
3. نمودار سیاق (Context Diagram): این نمودار برای نمایش روابط و تعاملات بین میکروسرویس‌ها در معماری microservice مفید است. در این نمودار، می‌توان سرویس‌های مختلف را با یکدیگر و با عوامل خارجی مرتبط نشان داد.
4. نمودار توالی (Sequence Diagram): این نمودار برای نمایش ترتیب و ارتباط بین مراحل و پیام‌های ارسال شده بین میکروسرویس‌ها در معماری microservice مفید است.
5. نمودار ترکیب (Composite Structure Diagram): این نمودار برای نشان دادن ساختار داخلی سرویس‌ها و ارتباطات بین اجزای آنها مفید است. با استفاده از این نمودار، می‌توان مولفه‌ها و اتصالات بین آنها را نمایش داد.
6. نمودار مولفه (Component Diagram): این نمودار برای نمایش ساختار مولفه‌های یک سرویس مفید است. می‌توان اجزاء سرویس، وابستگی‌ها و رابطه آنها را در این نمودار نشان داد.


### سوال ۲
رویکرد DDD یک رویکرد طراحی نرم‌افزار است که با تمرکز بر شناخت و تفکر درباره دامنه کسب و کار، به طراحی سیستم‌های قابل توسعه و قابل تغییر کمک می‌کند. این رویکرد با معماری MicroService همخوانی دارد، زیرا هر سرویس MicroService می‌تواند به یک دامنه کسب و کار خاص تعلق داشته باشد و بر اساس نیازمندی‌های آن دامنه طراحی شده باشد. به علاوه، DDD باعث می‌شود تا هر سرویس MicroService به عنوان یک خودکارآمد و مستقل از سایر سرویس‌ها طراحی شود، که این همان هدف اصلی معماری MicroService است.

### سوال ۳
در سازماندهی کانتینر، از ابزارهای مختلف برای خودکارسازی نصب، مدیریت، مقیاس پذیری الاستیک و مدیریت شبکه استفاده می‌شود. کوبرنتیز یک ابزار قدرتمند orchestrate کردن کانتینر است که بسیار شناخته شده است. همچنین، Docker Swarm و Docker Compose نیز به عنوان ابزارهای orchestration معمولاً استفاده می‌شوند.
