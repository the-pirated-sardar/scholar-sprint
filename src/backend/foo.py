from pyoacore.apis.articles_api import ArticlesApi
import pandas
 # j8F30WKHQaLkZVnEI4xU6Pd1Gc2BNwil

api = ArticlesApi()
result = api.articles_get_core_id_get(77398041)

cambridge = pandas.read_csv(StringIO((load_from_gdrive('1SzDiPNFA8jO_6al8udW6Gl-ogJ1VVuwg').decode("utf-8") )),sep='\t', names=('ID', "Title", "Published date", "DOI"))
oxford = pandas.read_csv(StringIO((load_from_gdrive('1LYdq4p19R6afC4ufFf7xWDfcqfzm9pS1').decode("utf-8") )),sep='\t', names=('ID', "Title", "Published date", "DOI"))

print("Oxford total records: %d Cambridge total records: %d" % (oxford.Title.count(), cambridge.Title.count()))