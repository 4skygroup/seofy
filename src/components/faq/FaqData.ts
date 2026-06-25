export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const faqData: FAQItem[] = [
    {
        id: 1,
        question: "How long does it take to see SEO results?",
        answer:
            "SEO is a medium to long-term strategy. In general, the first results start to appear between 3 and 6 months, depending on the competition, the current state of your site, and the actions implemented. More significant gains, in traffic, rankings, and conversions, typically consolidate between 6 and 12 months. SEO is a lasting investment that continues to deliver results over time.",
    },
    {
        id: 2,
        question: "What budget should I plan for SEO?",
        answer:
            "The budget depends on several factors: the size of your site, the level of competition in your market, your objectives, and the level of support you need. Since every project is unique, a personalised analysis is essential to propose a strategy tailored to your situation.",
    },
    {
        id: 3,
        question: "What is the difference between SEO and SEA?",
        answer:
            "SEO (organic search) involves optimising your site to appear in Google's natural results, it's a sustainable strategy that generates traffic over the long term. SEA (paid search) relies on advertising such as Google Ads, delivering immediate results that stop as soon as you pause your budget. SEO is a long-term investment, SEA delivers quick but temporary results. Both are complementary and work best together to maximise your visibility.",
    },
    {
        id: 4,
        question: "Do you work with all platforms?",
        answer:
            "Yes, we work with the majority of platforms: WordPress, Shopify, Webflow, as well as custom-built sites. Our approach adapts to your technical environment to ensure effective optimisations, regardless of your CMS.",
    },
    {
        id: 5,
        question: "Do you need a blog for SEO?",
        answer:
            "A blog is not mandatory, but it is strongly recommended. It allows you to target more keywords, attract qualified traffic, and strengthen your authority on Google. It is an excellent lever for growing your visibility, especially for informational queries.",
    },
    {
        id: 6,
        question: "How does an SEO engagement work?",
        answer:
            "An SEO engagement unfolds in several steps: a full audit covering technical, content, and competitive aspects; definition of an SEO strategy tailored to your objectives; technical and semantic optimisations; content creation and optimisation; netlinking to build your site's authority; and finally, monthly monitoring and adjustments with clear reporting. The goal is to durably improve your visibility, traffic, and conversions.",
    },
];