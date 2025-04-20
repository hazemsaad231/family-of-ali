import React from 'react';

const One = () => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-primary-color mb-6">التأسيس والنهضة</h3>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">١</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary-color mb-2">وصول محمد علي</h4>
                        <p className="text-gray-700 leading-relaxed">
                            وصل محمد علي باشا إلى مصر عام ١٨٠٥، وبدأ في بناء دولة حديثة قوية. قام بإصلاح النظام الإداري
                            وتحديث الجيش المصري ليكون قوة عسكرية فاعلة في المنطقة.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">٢</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary-color mb-2">الإصلاحات الاقتصادية</h4>
                        <p className="text-gray-700 leading-relaxed">
                            أطلق محمد علي مشروعاً طموحاً للتحديث الاقتصادي شمل إنشاء المصانع والمدارس والمستشفيات.
                            اهتم بتطوير الزراعة وإدخال المحاصيل الجديدة مثل القطن.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-color/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">٣</span>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary-color mb-2">التعليم والصحة</h4>
                        <p className="text-gray-700 leading-relaxed">
                            أسس نظاماً تعليمياً حديثاً وأرسل البعثات التعليمية إلى أوروبا. أنشأ المستشفيات
                            والمدارس الطبية لتطوير القطاع الصحي في مصر.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default One; 