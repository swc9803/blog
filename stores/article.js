export const useArticleStore = defineStore("article", {
  state: () => {
    return {
      id: 0,
      title: "",
      emoji: "",
      content: "",
    };
  },
  actions: {
    setActiveArticle(article) {
      this.id = article.id;
      this.title = article.title;
      this.emoji = article.emoji;
      this.content = article.content;
    },
  },
});
