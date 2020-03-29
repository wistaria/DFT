var documenterSearchIndex = {"docs":
[{"location":"ASE/howtouse/#ASEでの第一原理計算入門-1","page":"ASEでの第一原理計算入門","title":"ASEでの第一原理計算入門","text":"","category":"section"},{"location":"ASE/howtouse/#","page":"ASEでの第一原理計算入門","title":"ASEでの第一原理計算入門","text":"ここでは、ASEのチュートリアルを参考にして、実際に計算をしてみることにします。","category":"page"},{"location":"ASE/howtouse/#","page":"ASEでの第一原理計算入門","title":"ASEでの第一原理計算入門","text":"以下、工事中。","category":"page"},{"location":"ASE/howtouse/#原子の設定(Atomsオブジェクト)-1","page":"ASEでの第一原理計算入門","title":"原子の設定(Atomsオブジェクト)","text":"","category":"section"},{"location":"ASE/howtouse/#計算方法の設定(Calculators)-1","page":"ASEでの第一原理計算入門","title":"計算方法の設定(Calculators)","text":"","category":"section"},{"location":"ASE/jupyter/#Jupyter-notebookの使用-1","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"","category":"section"},{"location":"ASE/jupyter/#Jupyter-Notebookとは-1","page":"Jupyter notebookの使用","title":"Jupyter Notebookとは","text":"","category":"section"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"MathematicaやMatLabのような操作感でPythonを実行できるものです。 具体的に試してみましょう。以下はMateriAppsLiveの2.5で試しました。","category":"page"},{"location":"ASE/jupyter/#準備：ASEのインストール。-1","page":"Jupyter notebookの使用","title":"準備：ASEのインストール。","text":"","category":"section"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"まず、Pythonの準備をします。以下のコマンドをターミナルで打ち込んでください。","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"sudo curl -kL https://bootstrap.pypa.io/get-pip.py | sudo python3","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"パスワードを聞かれますが、これはlive と打ち込んでください。 次に、","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"sudo python3 -m pip install --upgrade --user ase","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"と入れてください。","category":"page"},{"location":"ASE/jupyter/#Jupyter-notebookの操作-1","page":"Jupyter notebookの使用","title":"Jupyter notebookの操作","text":"","category":"section"},{"location":"ASE/jupyter/#Jupyter-Notebookの起動-1","page":"Jupyter notebookの使用","title":"Jupyter Notebookの起動","text":"","category":"section"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"ターミナルで、","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"jupyter notebook","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"と打ちます。 すると、Webブラウザが立ち上がります。","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"(Image: fig1) ","category":"page"},{"location":"ASE/jupyter/#フォルダの作成-1","page":"Jupyter notebookの使用","title":"フォルダの作成","text":"","category":"section"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"まず、フォルダを作成します。 右上の「new」を押して、「Folder」を押すと、フォルダが作成されます。 よく見ると「Untitled Folder」があると思います。 その左のチェックボックスを押すと、Renameボタンが出てきて名前を変更できるようになりますので、 Renameボタンを押して、「ASE」という名前にしてみましょう。 できたASEフォルダをクリックします。","category":"page"},{"location":"ASE/jupyter/#Pythonノートブックの起動-1","page":"Jupyter notebookの使用","title":"Pythonノートブックの起動","text":"","category":"section"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"次に、Pythonノートブックを起動してみましょう。 右上の「New」を押し、「Python 3」を選びます。 すると、以下のような画面になります。","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"(Image: fig2) ","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"この中のInの部分にPythonでプログラムを書くことができます。 この図の中では、","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"a = 3\r\nb = 5\r\na+b","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"とありますが、これは、計算をしていることになります。 計算するには、Mathematicaと同じで、「Shift」キー+「Enter」キーでできます。","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"あとはPythonの入門書でもサイトでも見ながら好きなようにやってみてもよいでしょう。","category":"page"},{"location":"ASE/jupyter/#動作確認-1","page":"Jupyter notebookの使用","title":"動作確認","text":"","category":"section"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"次に、ASEがちゃんと動いているか確認するため、以下のサンプルコードを打ち込んでみましょう。","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"from ase import Atoms\r\nfrom ase.calculators.emt import EMT\r\nfrom ase.constraints import FixAtoms\r\nfrom ase.optimize import QuasiNewton\r\nfrom ase.build import fcc111, add_adsorbate\r\n\r\nh = 1.85\r\nd = 1.10\r\n\r\nslab = fcc111('Cu', size=(4, 4, 2), vacuum=10.0) #銅原子スラブのセット\r\n\r\nslab.set_calculator(EMT()) #銅原子スラブの計算にはEMTを使用\r\ne_slab = slab.get_potential_energy() #スラブのポテンシャルエネルギーを計算\r\n\r\nmolecule = Atoms('2N', positions=[(0., 0., 0.), (0., 0., d)]) #窒素分子のセット。(0,0,0)が一つ目のNの位置、(0,0,d)が二つ目のNの位置。\r\nmolecule.set_calculator(EMT()) #窒素分子の計算にはEMTを使用\r\ne_N2 = molecule.get_potential_energy() #窒素分子のポテンシャルエネルギーの計算\r\n\r\nadd_adsorbate(slab, molecule, h, 'ontop') #窒素分子を上にのせる\r\nconstraint = FixAtoms(mask=[a.symbol != 'N' for a in slab]) #拘束条件としては、計算を高速化するため、銅原子の位置を緩和させずに固定\r\nslab.set_constraint(constraint) #拘束条件をセット\r\ndyn = QuasiNewton(slab, trajectory='N2Cu.traj') #準ニュートン法を設定\r\ndyn.run(fmax=0.05) #構造緩和スタート。全ての原子に働く力がfmax以下になるまで。\r\n\r\nprint('Adsorption energy:', e_slab + e_N2 - slab.get_potential_energy()) #ポテンシャルエネルギーを計算し、先ほどの二つとの差を取る","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"これでshift+enterキーを押します。","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"                Step[ FC]     Time          Energy          fmax\r\n*Force-consistent energies used in optimization.\r\nBFGSLineSearch:    0[  0] 20:36:51       11.689927*       1.0797\r\nBFGSLineSearch:    1[  2] 20:36:51       11.670814*       0.4090\r\nBFGSLineSearch:    2[  4] 20:36:51       11.625880*       0.0409\r\nAdsorption energy: 0.3235194223181139","category":"page"},{"location":"ASE/jupyter/#","page":"Jupyter notebookの使用","title":"Jupyter notebookの使用","text":"のように出れば成功です。 第一原理計算ではありませんが、上のコードで NaCl結晶の格子定数を求めたことになります。","category":"page"},{"location":"Fast/fast/#第一原理計算高速チュートリアル-1","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"","category":"section"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"一つ一つは見ていくのは面倒！という人のために、このページにあることを実行すれば第一原理計算ができるようにしました。 順番にやってみてください。固体の第一原理計算をQuantum Espressoで実行することを念頭においています。 ここに書いたことはあとで項別にまとめる予定です。","category":"page"},{"location":"Fast/fast/#最初に行うこと-1","page":"第一原理計算高速チュートリアル","title":"最初に行うこと","text":"","category":"section"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"MateriApps LIVE!のインストール をみて、MateriApps LIVE!のインストールを終わらせてください。","category":"page"},{"location":"Fast/fast/#ASEのインストール-1","page":"第一原理計算高速チュートリアル","title":"ASEのインストール","text":"","category":"section"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"左下のツバメみたいなアイコンをクリックして、System ToolsからLXTerminalを選んでターミナルを出し、 以下のものを打ち込んでください。これは全て仮想マシン上で行われていますので、お使いのPCへの影響は全くありませんので安心してください。","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"sudo curl -kL https://bootstrap.pypa.io/get-pip.py | sudo python3","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"パスワードを聞かれますが、これはlive と打ち込んでください。 次に、","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"sudo python3 -m pip install --upgrade --user ase","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"と入れてください。","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"次に Jupyter Notebookの起動 をみてJupyter notebookを起動してください。","category":"page"},{"location":"Fast/fast/#結晶構造の入手-1","page":"第一原理計算高速チュートリアル","title":"結晶構造の入手","text":"","category":"section"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"左下のツバメメニューからWebブラウザFirefoxを起動し、Materials Project URL:https://materialsproject.org/ に移動してください。 ここには様々な固体の情報がデータベース化されています。 無料で利用できますので、googleアカウントをお持ちであれば簡単にログインできます。","category":"page"},{"location":"Fast/fast/#NaClの構造の入手-1","page":"第一原理計算高速チュートリアル","title":"NaClの構造の入手","text":"","category":"section"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"さて、NaClの構造を入手してみましょう。 周期表の表示があるので、そこでNaをクリックするか、あるいは検索窓にNa-Clなどと入れれば見つけることができます。 NaClのどれかをクリックして表示させます。 ここで、","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"(Image: fig1)","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"のCIFをクリックし、「Computed」を選んでみましょう。 これでDownloadsディレクトリにファイルがダウンロードされました。","category":"page"},{"location":"Fast/fast/#Vestaによる結晶構造の確認-1","page":"第一原理計算高速チュートリアル","title":"Vestaによる結晶構造の確認","text":"","category":"section"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"次に、ターミナルに戻ります。 ここで、","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":" cd ~/Downloads/","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"でDownloadsディレクトリに移動すると、ファイルがあるのがわかると思います。 そして、","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"vesta NaCl_mp-22862_computed.cif","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"とすればVESTAが立ち上がり、結晶構造を見ることができます。 VESTAは非常に優秀な「結晶構造、電子・核密度等の三次元データ、及び結晶外形の可視化プログラム」です。 https://jp-minerals.org/vesta/jp/","category":"page"},{"location":"Fast/fast/#ASEでの取り込み-1","page":"第一原理計算高速チュートリアル","title":"ASEでの取り込み","text":"","category":"section"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"保存したファイルをjupyter notebookでASEを使って取り扱ってみましょう。 保存したファイルは","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"cp ~/Downloads/NaCl_mp-22862_computed.cif ~/ASE/","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"で作ったフォルダにコピーしておきましょう。 あとは","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"import ase.io \r\nrocksalt =ase.io.read(\"NaCl_mp-22862_computed.cif\")","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"すれば読み込むことができます。","category":"page"},{"location":"Fast/fast/#第一原理計算のテスト実行-1","page":"第一原理計算高速チュートリアル","title":"第一原理計算のテスト実行","text":"","category":"section"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"このあとは、","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"NaCl結晶の格子定数 のようにやればよいです。","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"具体的には、ターミナルでまず","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"擬ポテンシャルのダウンロード：","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"cd /usr/share/espresso/pseudo\r\nsudo wget https://www.quantum-espresso.org/upf_files/Na.pbe-spn-kjpaw_psl.1.0.0.UPF\r\nsudo wget https://www.quantum-espresso.org/upf_files/Cl.pbe-n-rrkjus_psl.1.0.0.UPF","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"NaとClの擬ポテンシャルをダウンロードします。なお、他の擬ポテンシャルは https://www.quantum-espresso.org/pseudopotentials にあります。","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"次に、Jupyter notebook上で","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"from ase.build import bulk\r\nfrom ase.calculators.espresso import Espresso\r\nfrom ase.constraints import UnitCellFilter\r\nfrom ase.optimize import LBFGS\r\nimport ase.io \r\n\r\npseudopotentials = {'Na': 'Na.pbe-spn-kjpaw_psl.1.0.0.UPF',\r\n                    'Cl': 'Cl.pbe-n-rrkjus_psl.1.0.0.UPF'}\r\n#rocksalt = bulk('NaCl', crystalstructure='rocksalt', a=6.0)\r\nrocksalt =ase.io.read(\"NaCl_mp-22862_computed.cif\") #Material Projectでダウンロードしたものを使う場合。\r\ncalc = Espresso(pseudopotentials=pseudopotentials,\r\n                tstress=True, tprnfor=True, kpts=(3, 3, 3))\r\n\r\nrocksalt.set_calculator(calc)\r\n\r\nucf = UnitCellFilter(rocksalt)\r\nopt = LBFGS(ucf)\r\nopt.run(fmax=0.005)\r\n\r\n# cubic lattic constant\r\nprint((8*rocksalt.get_volume()/len(rocksalt))**(1.0/3.0))","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"コードでは、格子定数を最初は6として、設定したあと、構造最適化をしています。最後に、構造最適化して出てきた格子定数をプリントしています。","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"これを実行すると、","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"       Step     Time          Energy         fmax\r\nLBFGS:    0 21:27:48    -1960.836397        0.0625\r\nLBFGS:    1 21:28:01    -1960.836540        0.0501\r\nLBFGS:    2 21:28:13    -1960.834692        0.0338\r\nLBFGS:    3 21:28:26    -1960.833702        0.0079\r\nLBFGS:    4 21:28:39    -1960.834037        0.0006\r\n5.661404166984403","category":"page"},{"location":"Fast/fast/#","page":"第一原理計算高速チュートリアル","title":"第一原理計算高速チュートリアル","text":"と出ます。 これで第一原理計算でNaClの構造最適化ができました。","category":"page"},{"location":"chapter1/ASE/#Atomic-Simulation-Environment-(ASE)-1","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"","category":"section"},{"location":"chapter1/ASE/#ASEとは？-1","page":"Atomic Simulation Environment (ASE)","title":"ASEとは？","text":"","category":"section"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"Atomic Simulation Environment (ASE)というパッケージがあります。これは、第一原理計算や分子動力学法などの様々なパッケージをPythonによって統一的に操作できるフリーのソフトウエアです。","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"https://wiki.fysik.dtu.dk/ase/index.html","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"面白いのは、ある原子配置が与えられた時に、その時のエネルギーと原子間に働く力さえ返せる外部パッケージであれば、様々なものをPythonで扱うことができるようになります。有名どころでは、第一原理計算パッケージのVASPやQuantumEspressoなどがあります。","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"また、分子動力学法ではなく、普通の第一原理計算ももちろん可能です。 ここでは、MateriApps Live!上でASEをインストールする方法について述べます。","category":"page"},{"location":"chapter1/ASE/#いくつかのやり方-1","page":"Atomic Simulation Environment (ASE)","title":"いくつかのやり方","text":"","category":"section"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"ASEを使うにはいくつかのやり方があります。","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"一つは、ターミナル（左下のツバメのボタンを押して「System Tools」から「LXTerminal」を選ぶ）から\nJupyter Notebookの使用（MatLabやMathematica的な操作感）\nVirtual BoxにホストOSからSSH接続し、使う","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"などがあります。Jupyter notebookが一番簡単かもしれないので、Jupyter notebookを使ってやってみましょう。","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"Jupyter notebookの使用","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"以下はターミナルを用いたやり方です。あとでJupyter Notebookを使ったやり方に修正します。","category":"page"},{"location":"chapter1/ASE/#ASEのインストール-1","page":"Atomic Simulation Environment (ASE)","title":"ASEのインストール","text":"","category":"section"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"MateriApps LIVE!にはPythonが入っていますので、","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"pip install ase","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"とすればASEを簡単に入れることができます。このPythonのバージョンは2.7です。 ここで注意ですが、以下のサンプルコードはPython3系では動きませんでした。Python2系では動きました。","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"Python3で動かすためには、site-package/are/espresso.pyの292行目のmapをlist()で囲めば良いようです。","category":"page"},{"location":"chapter1/ASE/#サンプルコードの実行-1","page":"Atomic Simulation Environment (ASE)","title":"サンプルコードの実行","text":"","category":"section"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"NaCl結晶の格子定数を求めてみましょう。 実験的な格子定数は http://crystalbase.co.jp/index/b/nacl.html で、関連する日本語論文は https://www.jstage.jst.go.jp/article/jsssj/28/3/283144/_pdf にあります。","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"https://wiki.fysik.dtu.dk/ase/ase/calculators/espresso.html にあるサンプルコードはそのままでは動きません。 rocksalt.set_calculator(calc) が足りません。また、擬ポテンシャルをちゃんと持っているものを指定しなければなりません。 ですので、","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"from ase.build import bulk\r\nfrom ase.calculators.espresso import Espresso\r\nfrom ase.constraints import UnitCellFilter\r\nfrom ase.optimize import LBFGS\r\n\r\n\r\npseudopotentials = {'Na': 'Na.pbe-spn-kjpaw_psl.1.0.0.UPF',\r\n                    'Cl': 'Cl.pbe-n-rrkjus_psl.1.0.0.UPF'}\r\n\r\nrocksalt = bulk('NaCl', crystalstructure='rocksalt', a=6.0)\r\ncalc = Espresso(pseudopotentials=pseudopotentials,\r\n                tstress=True, tprnfor=True, kpts=(3, 3, 3))\r\n\r\nrocksalt.set_calculator(calc)\r\n\r\nucf = UnitCellFilter(rocksalt)\r\nopt = LBFGS(ucf)\r\nopt.run(fmax=0.005)\r\n\r\n# cubic lattic constant\r\nprint((8*rocksalt.get_volume()/len(rocksalt))**(1.0/3.0))\r\n","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"とします。","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"ここで、MateriApps LIVE!でのQuantum Espressoの擬ポテンシャルは /usr/share/espresso/pseudo にありますので、","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"cd /usr/share/espresso/pseudo\r\nsudo wget https://www.quantum-espresso.org/upf_files/Na.pbe-spn-kjpaw_psl.1.0.0.UPF\r\nsudo wget https://www.quantum-espresso.org/upf_files/Cl.pbe-n-rrkjus_psl.1.0.0.UPF","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"として、NaとClの擬ポテンシャルをダウンロードします。なお、他の擬ポテンシャルは https://www.quantum-espresso.org/pseudopotentials にあります。","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"コードでは、格子定数を最初は6として、設定したあと、構造最適化をしています。最後に、構造最適化して出てきた格子定数をプリントしています。 サンプルコードをファイルに保存して、実行すると、","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"user@malive:~$ python test.py \r\n       Step     Time          Energy         fmax\r\nLBFGS:    0 06:20:31    -1960.772207        0.5120\r\nLBFGS:    1 06:20:36    -1960.780670        0.4990\r\nLBFGS:    2 06:20:41    -1960.819410        0.3478\r\nLBFGS:    3 06:20:46    -1960.836529        0.1518\r\nLBFGS:    4 06:20:50    -1960.831494        0.0331\r\nLBFGS:    5 06:20:55    -1960.834038        0.0063\r\nLBFGS:    6 06:21:00    -1960.834046        0.0009\r\n5.659067832564933","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"こんな感じで出力されて、第一原理計算を用いてNaClの結晶構造の最適化を行うことができました。","category":"page"},{"location":"chapter1/ASE/#Julia言語での実装-1","page":"Atomic Simulation Environment (ASE)","title":"Julia言語での実装","text":"","category":"section"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"PythonよりもJuliaが好きなので、Juliaでの実装についても述べておきます。","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"最後に、Julia言語での実装も書いておきます。 MateriApps LIVE!のディスクイメージへのインストールは、","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"wget https://julialang-s3.julialang.org/bin/linux/x64/1.1/julia-1.1.0-linux-x86_64.tar.gz\r\ntar xzvf julia-1.1.0-linux-x86_64.tar.gz ","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"となります。ここではバージョンは1.1.0ですが、現在(2020年3月28日現在、1.4.0が出ていますので、そちらで構いません)","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"~/julia-1.1.0/bin/julia","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"で立ち上げて、さっきまで使っていたPythonを使うように","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"ENV[\"PYTHON\"]=\"/usr/bin/python\"","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"とし、 ]を押してパッケージモードにして、","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"add PyCall","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"としてPyCallをインストールします。","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"そして、コードは、","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"using PyCall\r\nconst bulk = pyimport(\"ase.build\").bulk\r\nconst Espresso = pyimport(\"ase.calculators.espresso\").Espresso\r\nconst UnitCellFilter = pyimport(\"ase.constraints\").UnitCellFilter\r\nconst LBFGS = pyimport(\"ase.optimize\").LBFGS\r\n\r\n\r\npseudopotentials =Dict(\"Na\"=> \"Na.pbe-spn-kjpaw_psl.1.0.0.UPF\",\"Cl\" => \"Cl.pbe-n-rrkjus_psl.1.0.0.UPF\")\r\n\r\nrocksalt = bulk(\"NaCl\", crystalstructure=\"rocksalt\", a=6.0)\r\ncalc = Espresso(pseudopotentials=pseudopotentials,\r\n                tstress=true, tprnfor=true, kpts=(3, 3, 3))\r\n\r\nrocksalt.set_calculator(calc)\r\n\r\n\r\nucf = UnitCellFilter(rocksalt)\r\nopt = LBFGS(ucf)\r\nopt.run(fmax=0.005)\r\n\r\n# cubic lattic constant\r\nprintln((8*rocksalt.get_volume()/length(rocksalt))^(1.0/3.0))","category":"page"},{"location":"chapter1/ASE/#","page":"Atomic Simulation Environment (ASE)","title":"Atomic Simulation Environment (ASE)","text":"となります。","category":"page"},{"location":"samples/samples/#ASEによる計算例-1","page":"ASEによる計算例","title":"ASEによる計算例","text":"","category":"section"},{"location":"samples/samples/#銅への窒素の吸着エネルギー-1","page":"ASEによる計算例","title":"銅への窒素の吸着エネルギー","text":"","category":"section"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"https://wiki.fysik.dtu.dk/ase/tutorials/surface.html 窒素分子が銅のスラブへ吸着する際のエネルギーを見積もってみましょう。このエネルギーは、「独立した窒素分子のエネルギー＋銅原子スラブのエネルギー」と「銅原子スラブに窒素分子が吸着しているエネルギー」の差となります。","category":"page"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"コードは以下に示します。適宜コメントを入れておきました。","category":"page"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"from ase import Atoms\r\nfrom ase.calculators.emt import EMT\r\nfrom ase.constraints import FixAtoms\r\nfrom ase.optimize import QuasiNewton\r\nfrom ase.build import fcc111, add_adsorbate\r\n\r\nh = 1.85\r\nd = 1.10\r\n\r\nslab = fcc111('Cu', size=(4, 4, 2), vacuum=10.0) #銅原子スラブのセット\r\n\r\nslab.set_calculator(EMT()) #銅原子スラブの計算にはEMTを使用\r\ne_slab = slab.get_potential_energy() #スラブのポテンシャルエネルギーを計算\r\n\r\nmolecule = Atoms('2N', positions=[(0., 0., 0.), (0., 0., d)]) #窒素分子のセット。(0,0,0)が一つ目のNの位置、(0,0,d)が二つ目のNの位置。\r\nmolecule.set_calculator(EMT()) #窒素分子の計算にはEMTを使用\r\ne_N2 = molecule.get_potential_energy() #窒素分子のポテンシャルエネルギーの計算\r\n\r\nadd_adsorbate(slab, molecule, h, 'ontop') #窒素分子を上にのせる\r\nconstraint = FixAtoms(mask=[a.symbol != 'N' for a in slab]) #拘束条件としては、計算を高速化するため、銅原子の位置を緩和させずに固定\r\nslab.set_constraint(constraint) #拘束条件をセット\r\ndyn = QuasiNewton(slab, trajectory='N2Cu.traj') #準ニュートン法を設定\r\ndyn.run(fmax=0.05) #構造緩和スタート。全ての原子に働く力がfmax以下になるまで。\r\n\r\nprint('Adsorption energy:', e_slab + e_N2 - slab.get_potential_energy()) #ポテンシャルエネルギーを計算し、先ほどの二つとの差を取る","category":"page"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"となります。","category":"page"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"slab.set_calculator(EMT())の部分をQuantum Espressoに置き換えれば第一原理計算で見積もることができます。","category":"page"},{"location":"samples/samples/#NaCl結晶の格子定数-1","page":"ASEによる計算例","title":"NaCl結晶の格子定数","text":"","category":"section"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"Quantum Espressoを用いて NaCl結晶の格子定数を求めてみましょう。 実験的な格子定数は http://crystalbase.co.jp/index/b/nacl.html で、関連する日本語論文は https://www.jstage.jst.go.jp/article/jsssj/28/3/283144/_pdf にあります。","category":"page"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"https://wiki.fysik.dtu.dk/ase/ase/calculators/espresso.html にあるサンプルコードはそのままでは動きません。 rocksalt.set_calculator(calc) が足りません。また、擬ポテンシャルをちゃんと持っているものを指定しなければなりません。 ですので、","category":"page"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"from ase.build import bulk\r\nfrom ase.calculators.espresso import Espresso\r\nfrom ase.constraints import UnitCellFilter\r\nfrom ase.optimize import LBFGS\r\n\r\n\r\npseudopotentials = {'Na': 'Na.pbe-spn-kjpaw_psl.1.0.0.UPF',\r\n                    'Cl': 'Cl.pbe-n-rrkjus_psl.1.0.0.UPF'}\r\n\r\nrocksalt = bulk('NaCl', crystalstructure='rocksalt', a=6.0)\r\ncalc = Espresso(pseudopotentials=pseudopotentials,\r\n                tstress=True, tprnfor=True, kpts=(3, 3, 3))\r\n\r\nrocksalt.set_calculator(calc)\r\n\r\nucf = UnitCellFilter(rocksalt)\r\nopt = LBFGS(ucf)\r\nopt.run(fmax=0.005)\r\n\r\n# cubic lattic constant\r\nprint((8*rocksalt.get_volume()/len(rocksalt))**(1.0/3.0))\r\n","category":"page"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"とします。","category":"page"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"ここで、MateriApps LIVE!でのQuantum Espressoの擬ポテンシャルは /usr/share/espresso/pseudo にありますので、","category":"page"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"cd /usr/share/espresso/pseudo\r\nsudo wget https://www.quantum-espresso.org/upf_files/Na.pbe-spn-kjpaw_psl.1.0.0.UPF\r\nsudo wget https://www.quantum-espresso.org/upf_files/Cl.pbe-n-rrkjus_psl.1.0.0.UPF","category":"page"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"として、NaとClの擬ポテンシャルをダウンロードします。なお、他の擬ポテンシャルは https://www.quantum-espresso.org/pseudopotentials にあります。","category":"page"},{"location":"samples/samples/#","page":"ASEによる計算例","title":"ASEによる計算例","text":"コードでは、格子定数を最初は6として、設定したあと、構造最適化をしています。最後に、構造最適化して出てきた格子定数をプリントしています。","category":"page"},{"location":"chapter1/MateriApps/#MateriApps-LIVE!のインストール-1","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"","category":"section"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"何らかのシミュレーションをするとき、最近は様々なフリーソフトウエアがあるおかげで、誰でも気軽に試すことができるようになってきました。 しかし、様々なフリーソフトウエアを試してみる時にまず最初の障害となるのが、そのソフトウエアのインストール作業です。インストールをするのに失敗して、結局投げ出してしまう、ということはよくあることだと思います。 例えば、第一原理計算ソフトウエアにはQuantum EspressoやABINIT、Open MXなど様々なフリーに使えるソフトウェアがあります。しかし、これらがどんな感じなのかを試そうとした時にそれぞれのインストールに四苦八苦して結局ソフトを試すことができない、ということはあるあるだと思います。 そんな時に便利なものがあります。それは、MateriApps LIVE!です。 https://cmsi.github.io/MateriAppsLive/ このサイトの説明には、","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"MateriApps LIVE!は、手持ちのノートPCなどを用いて、気軽に計算物質科学アプリケーションを試せる環境を提供します。MateriAppsアプリケーション、OS (Debian GNU/Linux)、エディタ、可視化ツールなど、チュートリアルを始めるのに必要な環境は全て1本のUSBメモリに収められています。","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"とあります。 これはVirtualBoxという仮想PCソフトウエアのディスクイメージで、MacでもWindowsでもLinuxでも、VirtualBoxをインストールすれば、このディスクイメージを読むことができます。 VirtualBoxでは、Linuxが立ち上がります。 そのLinuxの中に、","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"ABINIT, AkaiKKR, ALPS, CP2K, DCore, DDMRG, DSQSS, ERmod, feram, Gromacs, HPhi, LAMMPS, mVMC, OpenMX, Quantum ESPRESSO, RESPACK, SALMON, SMASH, TRIQS/CTHYB, TRIQS/DFT tools, xTAPP","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"が入っています。つまり、すでに有名なソフトウエアがインストール済みです。 ソフトウエアの詳細については https://github.com/cmsi/MateriAppsLive/wiki/GettingStarted こちらをみるとわかりやすいと思います。","category":"page"},{"location":"chapter1/MateriApps/#MateriApps-LIVE!のダウンロードとVirtual-Boxへの導入。-1","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のダウンロードとVirtual Boxへの導入。","text":"","category":"section"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"https://cmsi.github.io/MateriAppsLive/","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"から最新版をダウンロードします。具体的には、「Download LIVE! image」をクリックし、「Download Latest version」をクリックしてダウンロードしてください。 2.5GBくらいあります。","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"ダウンロードできたら、Virtual Boxに導入します。 Macの場合には、ダウンロードしたファイルをダブルクリックすれば導入できます。Windowsでも同様と思います。","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"(Image: fig1) ","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"ここで、RAMというのがメモリです。コンピュータの中にコンピュータを作ることになるので、ここでのRAMは実際のメモリ以上にすることはできません。 ここがなるべく多い方が快適です。4GBくらいあれば良いかと思います。 また、CPU、というのは仮想マシンで使うCPUコアの数ですので、4コアあるようなマシンであれば2コアくらい割り当てておくと快適でしょう。 これらはあとで変更することができます。","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"あとはそのままで「インポート」を押します。 これでVirtual Boxに導入されました。","category":"page"},{"location":"chapter1/MateriApps/#起動と最初にすること。-1","page":"MateriApps LIVE!のインストール","title":"起動と最初にすること。","text":"","category":"section"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"VirtualBoxで起動、のボタンをクリックすると仮想PCが起動します。 画面にログインwindowが出ますので、上にユーザー名user、下にパスワードとしてliveを入れるとログインできます。 画面が小さい場合には、角をドラッグしてウィンドウサイズを変更することができます。","category":"page"},{"location":"chapter1/MateriApps/#日本語キーボード設定-1","page":"MateriApps LIVE!のインストール","title":"日本語キーボード設定","text":"","category":"section"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"デフォルトではキーボードが英語配列になっていますので、日本のキーボードを使っている方は、 左下のツバメみたいなアイコンをクリックして、System ToolsからLXTerminalを選んでターミナルを出し、","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"setxkbmap -layout jp","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"と入れれば日本語キーボード配列になります。 このままだと起動するたびに英語キーボード配列になるので、立ち上げたターミナルで","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"echo setxkbmap -layout jp >> .bashrc","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"と打って.bashrcに設定を書き込んでおきましょう。 あとは、Wikiを見るなり何なりで、色々試すことができます。","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"以後、「ターミナル」と呼ぶときはこのLXTerminalをさしますので、いつも同じように左下のツバメのようなものをクリックして立ち上げてください。","category":"page"},{"location":"chapter1/MateriApps/#共有ファイル設定-1","page":"MateriApps LIVE!のインストール","title":"共有ファイル設定","text":"","category":"section"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"https://github.com/cmsi/MateriAppsLive/wiki/GettingStartedOVA を参考にしました。 自分が使っているPCと、今の仮想PCとのファイルのやりとりには、共有フォルダを作るのが便利です。 自分のPCのどこかにフォルダを作っておき、そのフォルダがmateriappsという名前だとします。 この時、","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"VirtualBox マネージャー画面で MateriAppsLive-* を選択し「設定」\n「共有フォルダー」タブを開き、右側の「+」(新規共有フォルダーを追加します)をクリック\n「フォルダーのパス」の右側の「ｖ」マークをクリックし、「その他」を選択。さきほど作ったフォルダmateriappsを選択\n「自動マウント」をチェックし「OK」⇒ さらに「OK」\n仮想マシンを再起動すると、上で選択したフォルダが、/media/sf_... の下に見える","category":"page"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"という手続きで共有フォルダを作ることができます。以後はここにファイルを入れておけば、仮想PC側で開くことができます。逆も可能です。","category":"page"},{"location":"chapter1/MateriApps/#画面サイズの設定-1","page":"MateriApps LIVE!のインストール","title":"画面サイズの設定","text":"","category":"section"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"そのままだと画面が小さすぎるとか大きすぎるとかあると思います。 これを簡単に調整するためには、メニューの「view」を選び、「Virtual Screen」を選んで、適当なものを選びます。 最近のRetina DisplayのMacだと解像度が高すぎて字が見えない場合もあると思いますので、その場合は「Scale to 200%」などを選ぶとよいでしょう。","category":"page"},{"location":"chapter1/MateriApps/#便利なTips-1","page":"MateriApps LIVE!のインストール","title":"便利なTips","text":"","category":"section"},{"location":"chapter1/MateriApps/#仮想PCの終了-1","page":"MateriApps LIVE!のインストール","title":"仮想PCの終了","text":"","category":"section"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"仮想PCを終了するためには、左下のツバメのようなものを押して、「log out」を選び、shut downをすればできます。","category":"page"},{"location":"chapter1/MateriApps/#仮想PCの開始-1","page":"MateriApps LIVE!のインストール","title":"仮想PCの開始","text":"","category":"section"},{"location":"chapter1/MateriApps/#","page":"MateriApps LIVE!のインストール","title":"MateriApps LIVE!のインストール","text":"Virtual Boxを立ち上げた状態で、MateriApps Live!を選び、「起動」を押します。","category":"page"},{"location":"chapter1/VirturlBox/#Virtual-Boxのインストール-1","page":"Virtual Boxのインストール","title":"Virtual Boxのインストール","text":"","category":"section"},{"location":"chapter1/VirturlBox/#インストール方法-1","page":"Virtual Boxのインストール","title":"インストール方法","text":"","category":"section"},{"location":"chapter1/VirturlBox/#","page":"Virtual Boxのインストール","title":"Virtual Boxのインストール","text":"https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html から自分のOSに合わせたバージョンをダウンロードし、インストールしてください。","category":"page"},{"location":"chapter1/VirturlBox/#","page":"Virtual Boxのインストール","title":"Virtual Boxのインストール","text":"以後は工事中です。","category":"page"},{"location":"#物性実験家のための無料でできる第一原理計算入門-1","page":"物性実験家のための無料でできる第一原理計算入門","title":"物性実験家のための無料でできる第一原理計算入門","text":"","category":"section"},{"location":"#目次-1","page":"物性実験家のための無料でできる第一原理計算入門","title":"目次","text":"","category":"section"},{"location":"#","page":"物性実験家のための無料でできる第一原理計算入門","title":"物性実験家のための無料でできる第一原理計算入門","text":"    Pages = [\r\n          \"chapter1/VirturlBox.md\",\r\n          \"chapter1/MateriApps.md\",\r\n          \"chapter1/ASE.md\",\r\n          \"ASE/howtouse.md\",\r\n          \"ASE/jupyter.md\",\r\n          \"QM/QM0.md\",\r\n          \"Samples/samples.md\",\r\n          \"Fast/fast.md\"\r\n    ]\r\n    Depth = 3","category":"page"},{"location":"#はじめに-1","page":"物性実験家のための無料でできる第一原理計算入門","title":"はじめに","text":"","category":"section"},{"location":"#","page":"物性実験家のための無料でできる第一原理計算入門","title":"物性実験家のための無料でできる第一原理計算入門","text":"2020年3月28日現在、世界中で新型コロナウイルスが猛威を振るっています。 これにより、大学や研究所が閉鎖されていることが多いと聞きます。 物性理論家は計算機にさえアクセスできれば研究を進められますが、実験家は実験ができなくて大変かと思います。 そこで、家でもでき、かつ今後役に立つ技術として、第一原理計算を無料でできる方法についてここに記したいと思います。 ただし、私は、第一原理計算を行って論文を書いたことはありますが完全な専門の人ではないため、あくまで第一原理計算ユーザーとしても目線で 記述したいと思います。Windowsでも、Macでも、Linuxでも、ノートパソコンさえあれば誰でも無料で第一原理計算をすることができます。 これを期に第一原理計算を始めてみてはいかがでしょうか。 一刻も早い事態の収束を願うとともに、皆様の研究が進展しますように。","category":"page"},{"location":"#","page":"物性実験家のための無料でできる第一原理計算入門","title":"物性実験家のための無料でできる第一原理計算入門","text":"2020年3月28日 Yuki Nagai","category":"page"},{"location":"#このサイトについて-1","page":"物性実験家のための無料でできる第一原理計算入門","title":"このサイトについて","text":"","category":"section"},{"location":"#","page":"物性実験家のための無料でできる第一原理計算入門","title":"物性実験家のための無料でできる第一原理計算入門","text":"このサイトはGitHub上に作られており、追記したいあるいは改訂したい場合は通常のgitのように更新リクエストができます。 また、原稿はJuliaのDocumenter.jlを使って作られています。 https://juliadocs.github.io/Documenter.jl/stable/ これを使うと、マークダウン形式で記事を書くことができます。 適宜書いていくことになりますので、更新ペースがどうなるかはわかりません。","category":"page"},{"location":"#方針について-1","page":"物性実験家のための無料でできる第一原理計算入門","title":"方針について","text":"","category":"section"},{"location":"#","page":"物性実験家のための無料でできる第一原理計算入門","title":"物性実験家のための無料でできる第一原理計算入門","text":"基本的にMateriApps LIVE!を https://cmsi.github.io/MateriAppsLive/ 使います。これはWindowsでもMacでもLinuxでも使える仮想マシンで、 入れさえすれば環境に依らずに実行することができます。 仮想マシンとしてはVirtual Boxを用います。このインストール方法についても書く予定です。","category":"page"},{"location":"QM/QM0/#Quantum-Espresso-1","page":"Quantum Espresso","title":"Quantum Espresso","text":"","category":"section"},{"location":"QM/QM0/#","page":"Quantum Espresso","title":"Quantum Espresso","text":"Quantum Espressoはフリーの第一原理計算ソフトウエアです。","category":"page"},{"location":"QM/QM0/#","page":"Quantum Espresso","title":"Quantum Espresso","text":"以後工事中。","category":"page"}]
}
