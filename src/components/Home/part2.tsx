
const Two = () => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-primary-color mb-6">التطور والتراث</h3>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">٤</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary-color mb-2">التراث المعماري</h4>
                        <p className="text-gray-700 leading-relaxed">
                            ترك أفراد الأسرة إرثاً معمارياً عظيماً يشمل القصور والمباني التاريخية مثل قصر عابدين
                            وقصر القبة وقصر المنتزه، التي تعكس الطراز المعماري الفريد لتلك الحقبة.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">٥</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary-color mb-2">التراث الثقافي</h4>
                        <p className="text-gray-700 leading-relaxed">
                            أسهمت الأسرة في تطوير الفنون والآداب، ودعمت الحركة الثقافية في مصر. أنشأت المكتبات
                            والمتاحف ودعمت الفنانين والمفكرين.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">٦</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary-color mb-2">الإرث السياسي</h4>
                        <p className="text-gray-700 leading-relaxed">
                            أسست الأسرة نظاماً سياسياً حديثاً في مصر، وتركت أثراً عميقاً في تطور الدولة المصرية
                            الحديثة وعلاقاتها الدولية.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Two; 