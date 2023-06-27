with open("cert.txt") as f:
    lines = f.readlines()
    for line in lines[:-1]:
        print('\"' + line.rstrip() + '\\n\" \\')
    print('\"' + lines[-1].rstrip() + '\\n\"')
