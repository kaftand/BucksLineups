# -*- coding: utf-8 -*-
import scrapy


class BuckslineupsSpider(scrapy.Spider):
    name = 'bucksLineups'
    allowed_domains = ['stats.nba.com']
    start_urls = ['https://stats.nba.com/lineups/advanced/?Season=2018-19&SeasonType=Regular%20Season&TeamID=1610612749/']

    def parse(self, response):
        a = response.css("div.nba-stat-table__overflow")
        b = 2

from scrapy.crawler import CrawlerProcess
process = CrawlerProcess({
    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)'
})
process.crawl(BuckslineupsSpider)
process.start() 