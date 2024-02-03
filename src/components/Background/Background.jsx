

export default function Background() {

  const emotion = localStorage.getItem('emotion');

  const colors = {
    'Surprise': [
      '#EB8951',
      '#7B3228',
      '#A65941',
      '#C6836E',
    ],
    'Neutral': [
      '#182F5D',
      '#1E3266',
      '#25467D',
      '#356CB1'
    ],
    'Anger': [
      '#CC2424',
      '#AB2323',
      '#C42A2A',
      '#F12F2F'
    ],
    'Happy': [
      '#DAC349',
      '#AD9335',
      '#D3C05D',
      '#ECD76C'
    ],
    'Disgust': [
      '#BF98D8',
      '#A243DC',
      '#AA61D6',
      '#B978E1'
    ],
    'Sad': [
      '#212121',
      '#000000',
      '#1C1C1C',
      '#3D3D3D'
    ],
  }

  const color = colors[emotion];


  return (
      <svg width="1280" height="800" viewBox="0 0 1280 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1280 0H0V800H1280V0Z" fill={color[0]}/>
        <path d="M1301.33 800H0V615.24C15.8933 560.027 51.4489 540.367 106.667 556.26C135.402 542.327 156.736 549.727 170.667 578.46C204.216 569.347 225.549 581.563 234.667 615.11C237.669 575.45 259.002 557.12 298.667 560.12C315.976 534.767 337.309 530.743 362.667 548.05C413.582 527.857 449.138 543.217 469.333 594.13C512.224 565.91 547.78 573.243 576 616.13C600.787 598.257 622.12 601.713 640 626.5C646.133 589.967 667.467 574.767 704 580.9C717.193 551.427 738.527 543.29 768 556.49C782.547 528.377 803.88 521.593 832 536.14C864.813 526.287 886.147 537.767 896 570.58C931.033 562.947 952.367 576.65 960 611.69C989.74 570.323 1025.3 564.51 1066.67 594.25C1070.94 555.857 1092.28 538.797 1130.67 543.07C1155.82 525.557 1177.16 529.377 1194.67 554.53C1236.82 525.577 1272.38 532.177 1301.33 574.33V800Z" fill={color[1]}/>
        <path d="M1365.33 800H0V637.06C21.46 615.853 42.7933 615.98 64 637.44C74.6267 605.4 95.96 594.697 128 605.33C168.227 574.443 203.782 579.113 234.667 619.34C279.769 621.773 301.102 645.54 298.667 690.64C298.269 647.573 319.602 625.84 362.667 625.44C391.536 583.2 427.091 576.517 469.333 605.39C516.818 581.763 552.373 593.693 576 641.18C628.947 623.02 664.502 640.413 682.667 693.36C692.816 660.84 714.149 649.653 746.667 659.8C771.009 613.033 806.564 601.82 853.333 626.16C907.131 608.847 942.687 627.09 960 680.89C974.26 652.483 995.593 645.413 1024 659.68C1053.06 617.633 1088.62 611.14 1130.67 640.2C1146.62 613.487 1167.95 608.103 1194.67 624.05C1226.3 613.017 1247.64 623.317 1258.67 654.95C1299.97 625.143 1335.52 630.89 1365.33 672.19V800Z" fill={color[2]}/>
        <path d="M1365.33 800H0V681.54C31.3 641.727 66.8556 637.47 106.667 668.77C146.436 665.87 167.769 684.303 170.667 724.07C210.022 692.317 245.578 696.117 277.333 735.47C306.458 721.923 327.791 729.713 341.333 758.84C353.691 700.087 389.247 676.89 448 689.25C487.007 657.15 522.562 660.603 554.667 699.61C605.856 679.69 641.411 695.323 661.333 746.51C673.071 715.583 694.404 705.987 725.333 717.72C766.304 687.58 801.86 692.993 832 733.96C840.013 699.307 861.347 685.987 896 694C936.413 663.3 971.969 668.157 1002.67 708.57C1032.79 696.023 1054.12 704.81 1066.67 734.93C1095.36 720.95 1116.69 728.303 1130.67 756.99C1133.15 716.803 1154.48 697.95 1194.67 700.43C1211.12 674.21 1232.45 669.323 1258.67 685.77C1289.28 645.263 1324.83 640.313 1365.33 670.92V800Z" fill={color[3]}/>
        <path d="M1344 800H0V821.37C17.2933 767.55 52.8489 749.287 106.667 766.58C138.482 727.287 174.038 723.547 213.333 755.36C270.158 741.073 305.713 762.34 320 819.16C349.06 777.107 384.616 770.61 426.667 799.67C438.522 768.857 459.856 759.377 490.667 771.23C507.382 745.277 528.716 740.657 554.667 757.37C586.042 746.077 607.376 756.117 618.667 787.49C638.129 735.837 673.684 719.74 725.333 739.2C752.878 724.08 774.211 730.293 789.333 757.84C830.158 756 851.491 775.493 853.333 816.32C862.411 782.727 883.744 770.47 917.333 779.55C946.918 738.023 982.473 732.05 1024 761.63C1076.95 743.47 1112.51 760.867 1130.67 813.82C1155.44 767.473 1190.99 756.683 1237.33 781.45C1260.15 733.157 1295.71 720.42 1344 743.24V800Z" fill="white"/>
      </svg>
  )
}