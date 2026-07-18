module.exports = function (eleventyConfig) {

    // =====================================================
    // PASSTHROUGH COPY
    // =====================================================

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");

    // =====================================================
    // COLLECTION : KODING
    // =====================================================

    eleventyConfig.addCollection("koding", function (collectionApi) {

        return collectionApi
            .getFilteredByGlob("src/koding/materi/*.md")
            .sort((a, b) => (a.data.order || 999) - (b.data.order || 999));

    });

    // =====================================================
    // COLLECTION : INFORMATIKA
    // =====================================================

    eleventyConfig.addCollection("informatika", function (collectionApi) {

        return collectionApi
            .getFilteredByGlob("src/informatika/materi/*.md")
            .sort((a, b) => (a.data.order || 999) - (b.data.order || 999));

    });

return {

    pathPrefix: "/portal-pembelajaran/",

    dir: {

        input: "src",

        includes: "includes",

        layouts: "layouts",

        data: "data",

        output: "_site"

    }

};

};