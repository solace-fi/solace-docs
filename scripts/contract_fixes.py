# links all contract documents to their solidity source code in github

# get files
from glob import glob
filenames = sorted(glob('docs/dev-docs/Contracts/**/*', recursive=True))
filenames = list(filter(lambda filename: filename[-3:] == '.md', filenames))
# loop over files
for filename in filenames:
    # read file
    file_r = open(filename, 'r')
    md = file_r.read()
    file_r.close()
    # modify file
    md = f"""<a href="https://github.com/solace-fi/solace-core/blob/main/contracts/{filename[24:-3]}.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>\n\n{md}"""
    # write file
    file_w = open(filename, 'w')
    _ = file_w.write(md)
    file_w.close()
