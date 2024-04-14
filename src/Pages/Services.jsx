import React from "react";
import PageHeader from "../components/PageHeader";
import webImage from "../assets/images/web.png";
import appsImage from "../assets/images/apps.png";
import designImage from "../assets/images/design.png";
import marketingImage from "../assets/images/marketing.png";
import motionImage from "../assets/images/motion.png";

const Services = () => {
  return (
    <section>
      <PageHeader
        title="خدماتنا"
        slogan="نعمل على تقديم منتجات تقنية ذات قيمة"
        description="خدماتنا في سمارت براند نسعى لتقديمها بقيمة تقنية جديدة ومميزة حيث نعمل على تقديم خدمات تصميم مواقع ، تصميم تطبيقات ، تصميم جرافيك ، موشن جرافيك ، التسويق الالكتروني من خلال تقديم خدماتنا بقيمة تقنية جديدة وفريدة للارتقاء بالمنتج والمحتوى العربي ، نعمل على تقديم خدماتنا في عالم من الابداع في تصميم مواقع ، تصميم تطبيقات ، تصميم جرافيك للهويات التجارية ، وخدمات التسويق الالكتروني حيث نعمل على ايجاد أفضل الحلول التقنية بما يلبي احتياجات السوق المحلي والعالمي و إضافة ميزة وقيمة جديدة بين رواد المجال التقني.
        "
      />

      {/* Web */}
      <div className="container">
        <div className="my-10 flex items-center flex-col md:flex-row gap-4">
          <div className="info basis-1/2">
            <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
              تصميم مواقع
            </h2>
            <p className="font-semibold text-center block mb-10">
              تصميم مواقع الانترنت لأنك تستحق الأفضل دائماً نوفر لك في رسكودي
              التصميم المميز الذي يساعدك في جذب المزيد من العملاء واعطائك الميزة
              التنافسية والصدارة بين الشركات، خدمات تصميم الموقع الإلكتروني
              تساعدك في المزيد من التعريف بعلامتك التجارية ، وتساعدك على الوصول
              إلى عملاء جدد كل يوم، نعمل من خلال تقديم خدمة تصميم مواقع الانترنت
              على عرض أفضل تقنيات التصميم والبرمجة لتناسب احتياجات عملائنا .
            </p>
          </div>
          <div className="img basis-1/2">
            <img className="w-full" src={webImage} alt="Web" />
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-200">
        <div className="spikes"></div>
        <div className="container py-16">
          <div className="title">
            <h2 className="text-main-blue font-bold text-4xl text-center mb-2">
              مزايا تصميم المواقع
            </h2>
            <span className="font-normal text-center block mb-10">
              معنا البداية التي تضمن النجاح المتواصل لأعمالك
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-display text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                تصميم متجاوب
              </h3>
              <p>
                نقدم تصميم متجاوب يعمل على جميع الأجهزة والشاشات بكفاءة عالية
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-gauge-high text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                سرعة التحميل
              </h3>
              <p>
                نعمل على تقديم موقع سريع التحميل لتحسين تجربة المستخدم والتفاعل
                مع الموقع
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-wand-sparkles text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">تصميم مميز</h3>
              <p>
                نقدم تصميم مميز يعكس هوية علامتك التجارية ويعطيك المزيد من الثقة
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-brands fa-searchengin text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                صديق لمحركات البحث
              </h3>
              <p>
                جميع مواقعنا التي نقدمها مبنية على أساس صحيح وقوي بما يتناسب مع
                معايير التسويق الرقمي و محركات البحث العالمية .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-earth-africa text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                موقع متعدد اللغات
              </h3>
              <p>
                الموقع الالكتروني الذي نقدمه لعملائنا يتناسب مع جميع الفئات التي
                يتعامل معها العميل بما يضمن له التواصل المميز مع عملائه .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-shield-halved text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                تطبيق معايير الحماية
              </h3>
              <p>
                معايير الحماية الفنية في جميع منتجاتنا لها الأولوية القصوى وذلك
                للحفاظ على بياناتك وملفاتك بشكل كامل .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Apps */}
      <div className="container">
        <div className="my-10 flex items-center flex-col md:flex-row gap-4">
          <div className="info basis-1/2">
            <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
              تصميم تطبيقات
            </h2>
            <p className="font-semibold text-center block mb-10">
              تصميم تطبيقات الهواتف الذكية في الوقت الحالي هو نتيجة التطور
              السريع في التكنولوجيا حيث أن هناك الكثير من طرق التسويق الالكتروني
              و الترويج للخدمات والمنتجات وأدرى أنتشار الهواتف الذكية إلى الطلب
              المتزايد على تصميم تطبيقات الهواتف الذكية بنظاميها الأندرويد
              (android ) ، و الايفون ( iphone ) بما يلبي رغبات واحتياجات
              المستخدمين والعملاء ولذلك أغلب أصحاب الشركات والمؤسسات أو الأفراد
              يحتاجون إلى ترويج خدماتهم ومنتجاتهم بشكل أسرع وأفضل ونحن في رسكودي
              نقدم خدمات تصميم تطبيقات الموبايل بما يلبي رغبة عملائنا في الترويج
              لخدماتهم ومنتجاتهم بطريقة مبتكرة إبداعية وتفاعلية على الهواتف
              الذكية بأنظمة الأندرويد أو آلايفون.
            </p>
          </div>
          <div className="img basis-1/2">
            <img className="w-full" src={appsImage} alt="Web" />
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-200">
        <div className="spikes"></div>
        <div className="container py-16">
          <div className="title">
            <h2 className="text-main-blue font-bold text-4xl text-center mb-2">
              مزايا التطبيقات
            </h2>
            <span className="font-normal text-center block mb-10">
              معنا البداية التي تضمن النجاح المتواصل لأعمالك
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-lock text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">الخصوصية</h3>
              <p>نحتفظ لك بحق خصوصية الفكرة الحصرية لك .</p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-star text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                جودة التطبيقات
              </h3>
              <p>
                الجودة هي ركن أساسي في كل خدماتنا عامة وفي التطبيقات خاصة بداية
                من التصميم إلى البرمجة .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-wand-sparkles text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                التصميم السهل
              </h3>
              <p>
                نعتمد على تقديم تصميمات سهلة استخدام لتحقيق هدف التطبيق
                والانتشار .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-brands fa-searchengin text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                صديق لمحركات البحث
              </h3>
              <p>
                جميع مواقعنا التي نقدمها مبنية على أساس صحيح وقوي بما يتناسب مع
                معايير التسويق الرقمي و محركات البحث العالمية .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-earth-africa text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                موقع متعدد اللغات
              </h3>
              <p>
                الموقع الالكتروني الذي نقدمه لعملائنا يتناسب مع جميع الفئات التي
                يتعامل معها العميل بما يضمن له التواصل المميز مع عملائه .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-shield-halved text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                تطبيق معايير الحماية
              </h3>
              <p>
                معايير الحماية الفنية في جميع منتجاتنا لها الأولوية القصوى وذلك
                للحفاظ على بياناتك وملفاتك بشكل كامل .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Graphic */}
      <div className="container">
        <div className="my-10 flex items-center flex-col md:flex-row gap-4">
          <div className="info basis-1/2">
            <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
              تصميم جرافيك
            </h2>
            <p className="font-semibold text-center block mb-10">
              تصميم جرافيك هو جسر التواصل بينك وبين عملائك فهو الأنطباع الأول
              لذى نحرص في رسكودي مع فريق المصممين على تقديم كل طاقتنا لتوفير
              محتوى نصي وبصري مبتكر وفريد لتظهر أعمالك في أرقى مستوى من التميز
              فمعنا تتذوق تصميمك وهويتك التجارية ، ونسعى لنقدم لكم خدمة تصميم
              جرافيك بأعلى جودة وبأحسن سعر منافس ،ونضع بين أيديكم النجاح المضمون
              لعلامتكم التجارية بطريقة مختلفة وفريدة ومتميزة .
            </p>
          </div>
          <div className="img basis-1/2">
            <img className="w-full" src={designImage} alt="Web" />
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-200">
        <div className="spikes"></div>
        <div className="container py-16">
          <div className="title">
            <h2 className="text-main-blue font-bold text-4xl text-center mb-2">
              مزايا التصميم لدينا
            </h2>
            <span className="font-normal text-center block mb-10">
              معنا البداية التي تضمن النجاح المتواصل لأعمالك
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-swatchbook text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">ألوان راقية</h3>
              <p>
                نعتمد على استخدام ألوان نابضة بالحياة في جميع تصميماتنا التجارية
                .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-lightbulb text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                الأبتكار والانفراد
              </h3>
              <p>
                الإبتكار والانفراد هو عنصر فعّال لدينا لتوفير التميز والخصوصية
                لعملائنا.
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-brush text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">البساطة</h3>
              <p>
                نحقق المعادلة الصعبة تصميم مميز وفريد وبسيط في نفس الوقت وهو سر
                نجاحنا.
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-palette text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                الاهتمام بالتفاصيل
              </h3>
              <p>
                ليست الفكرة في إنشاء شعار أو أوراق رسمية للطباعة بل نهتم بأدق
                تفاصيل التصميم .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-layer-group text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">التكامل</h3>
              <p>
                نقدم هوية تجارية متكاملة العناصر بما يناسب احتياجات عملائنا .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-pen-ruler text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                الأساس الفني
              </h3>
              <p>
                نهتم بالقواعد الفنية في إعداد وتجهيز الشعار و الهوية التجارية
                بما يضمن جودة الطباعة النهائية .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing */}
      <div className="container">
        <div className="my-10 flex items-center flex-col md:flex-row gap-4">
          <div className="info basis-1/2">
            <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
              التسويق الالكتروني
            </h2>
            <p className="font-semibold text-center block mb-10">
              التسويق الالكتروني يعتبر الآن الاداة الأكثر فاعلية في مجال الدعاية
              والترويج للخدمات والمنتجات لما يتميز به التسويق الالكتروني من ضمان
              الوصول إلى أكبر عدد ممكن من الجمهورالحالي بالإضافة إلى وصولك إلى
              أكبر عدد ممكن من العملاء المهتمين بمنتجاتك أو خدماتك بما ينعكس
              ايجابا على حجم مبيعاتك لديك ، ولذلك لتتأكد من نجاح موقعك او تطبيقك
              لابد أن تمتلك خطة قوية تضمن كيفية وصول عملائك اليك بسهولة وبناء
              مجتمع قوي معهم.
            </p>
          </div>
          <div className="img basis-1/2">
            <img className="w-full" src={marketingImage} alt="Web" />
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-200">
        <div className="spikes"></div>
        <div className="container py-16">
          <div className="title">
            <h2 className="text-main-blue font-bold text-4xl text-center mb-2">
              مزايا التسويق لدينا
            </h2>
            <span className="font-normal text-center block mb-10">
              معنا البداية التي تضمن النجاح المتواصل لأعمالك
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-chart-simple text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                تحليل ودراسة السوق
              </h3>
              <p>
                نعتمد على تقنياتنا الخاصة في جمع المعلومات بطريقة منظمة،
                وتحليلها واستخدامها في اتخاذ القرارات التسويقية المناسبة.
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-bullseye text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                انشاء الخطط الاستراتيجية
              </h3>
              <p>
                بناءالخطة الاستراتيجية للتسويق الالكتروني هي الركيزة الأولى
                للمسار التسويقي الصحيح لذلك نعطيه العناية الفائقة لدينا.
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-pen-nib text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                كتابة المحتوى الإبداعي
              </h3>
              <p>
                فهو مفتاح نجاح الخطة التسويقية حيث نعمل على إفادة المستهدفين
                لكسب مزيداً من الثقة بين عملائنا والمستهدفين من الزبائن.
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-pager text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                إدارة الحملات اللإعلانية
              </h3>
              <p>
                حيث نعمل على إدارة الحملات التسويقية للمنتجات أو الخدمات أو
                الأفكار الابداعية عبر مواقع التواصل الإجتماعي ومحرك البحث جوجل
                للوصول لأكبر عدد ممكن من الجمهور المستهدف.
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-folder-tree text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                تهيئة الموقع لمحركات البحث SEO
              </h3>
              <p>
                لأن وجودك ضمن المواقع الأولى في محركات البحث, يزيد من فرص حصولك
                على عميل مستهدف مهتم بمجالك أو منتجاتك فلذلك نعطي لهذا الأولوية
                في خدماتنا.
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-clapperboard text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                تصميم فيديوهات دعائية
              </h3>
              <p>
                نعتمد على عرض المادة المرئية بفكرة جديدة وشيقة لجذب المزيد من
                المشاهدات ، فالمادة المرئية هي من أهم وأبرز أدوات التسويق في
                الوقت الحالي وهي الأنجح في إقناع العميل المستهدف.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Motion */}
      <div className="container">
        <div className="my-10 flex items-center flex-col md:flex-row gap-4">
          <div className="info basis-1/2">
            <h2 className="text-main-blue text-4xl text-center mb-3 font-bold">
              موشن جرافيك
            </h2>
            <p className="font-semibold text-center block mb-10">
              خدمة تصميم موشن جرافيك مميز فهي من أفضل الخدمات التي تساعدك في
              التعبير عن خدماتك ومنتجاتك بطريقة مميزة لأن نسبة التفاعل مع
              الفيديو المتحرك والمتميز أعلى بكثير من الصور والنصوص الثابتة ولذلك
              ستضمن الإنتشار الواسع والترويج الفعّال لخدماتك ومنتجاتك بما سيحقق
              لك العائد المالي الأكبر، اجذب انتباه عملائك بفيديو مميز وجذاب .
            </p>
          </div>
          <div className="img basis-1/2">
            <img className="w-full" src={motionImage} alt="Web" />
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-200">
        <div className="spikes"></div>
        <div className="container py-16">
          <div className="title">
            <h2 className="text-main-blue font-bold text-4xl text-center mb-2">
              مزايا فيديوهات الموشن لدينا
            </h2>
            <span className="font-normal text-center block mb-10">
              معنا البداية التي تضمن النجاح المتواصل لأعمالك
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-sun text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                إيصال الفكرة بشكل سهل وسريع
              </h3>
              <p>
                تتميز فيديوهات الإنفوجرافيك بقدرتها الكبيرة على تبسيط المعلومات
                وجعلها موجزة ومختصرة وحفرها في ذاكرة المشاهد لأطول فترة ممكنة
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-bullhorn text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                جذب انتباه عملائك
              </h3>
              <p>
                فيديو الموشن جرافيك وسيلتك التسويقية المثالية والفعّالة لزيادة
                التفاعل وجذب الانتباه لما تقدمه من خدمات ومنتجات لعملائك .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-arrow-up-right-dots text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                زيادة نسب المبيعات
              </h3>
              <p>
                فيديوهات الموشن جرافيك تثبت قوتها في بيع الخدمات والمنتجات،
                لأنها تجيب ببساطة شديدة على أسئلة عملائك المحتملين .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 border-main-blue p-4 shadow-lg rounded-xl border">
              <i className="fa-solid fa-gem text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                الترويج لعلامتك تجارية
              </h3>
              <p>
                استخدام الفيديو الترويجي بشكل متحرك مميز وسهل وسريع سيزيد من فرص
                الترويج لعلامتك التجارية بين عملائك والمنافسين .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-video text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                قناة تسويقية جديدة
              </h3>
              <p>
                أثبتت الدراسات التسويقية الحديثة أن نسب مشاهدة فيديوهات الموشن
                جرافيك المميزة والمختصرة باعلى بكثير من نسب قراءة المقالات أو
                الطريق التقليدية في الترويج للمنتجات والخدمات .
              </p>
            </div>
            <div className="feature feature flex flex-col items-center justify-center text-center gap-2 b border border-main-blue p-4 shadow-lg rounded-xl">
              <i className="fa-solid fa-flag text-3xl bg-main-blue text-white w-16 h-16 flex items-center justify-center rounded-xl"></i>
              <h3 className="text-main-blue text-2xl font-bold">
                الدعاية الإعلانية المميزة
              </h3>
              <p>
                التركيز على فيديوهات الموشن جرافيك ستجعلك تنافس بقوة أمام
                منافسيك ، من خلال الوصول إلى جمهورك المستهدف بطريقة مميزة وفريدة
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
