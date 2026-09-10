install:
	npm install

update:
	npm update --save

format:
	npm run format

push:
	git add .
	git commit -m "Updating Information"
	git push
	
dev:
	npm run dev