# SELab-Docker

## توضیحات معماری
### شکل کلی معماری میکروسرویس در نظر گرفته شده به صورت زیر است:

![microservice drawio](https://github.com/royaghavami/SELab-Docker/assets/59202308/347eb297-125d-40d3-8e71-abe65e76669c)


### به طور کلی٫ سه میکروسرویس داریم:
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

GET	api/tutorials	
GET	api/tutorials/:id	
POST	api/tutorials
PUT	api/tutorials/:id
DELETE	api/tutorials/:id
DELETE	api/tutorials
GET	api/tutorials/published
GET	api/tutorials?title=[title]


