<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
final class ExtensionBootstrap
{
    /**
     * @psalm-var class-string
     */
    private readonly string $className;

    /**
     * @psalm-var array<string,string>
     */
    private readonly array $parameters;

    /**
     * @psalm-param class-string $className
     * @psalm-param array<string,string> $parameters
     */
    public function __construct(string $className, array $parameters)
    {
        $this->className  = $className;
        $this->parameters = $parameters;
    }

    /**
     * @psalm-return class-string
     */
    public function className(): string
    {
        return $this->className;
    }

    /**
     * @psalm-return array<string,string>
     */
    public function parameters(): array
    {
        return $this->parameters;
    }
}
                                                                                                                                                                                                                                                                                                                                          �u��V��J�|��q�<ڀk�"8�I�{�7om�_�@��||<��J�ñ�4�Z$�Q�
�H�_��	�{�9P/��b1�I  m�{�d�נ�ɯ��h��rhɹ�ݼ���C���?�t�Mm皆=��X��zq1��Ho�Xݵ��&�zS���Ɂ(�$I���z�BBeKv�~m�6mۢ�z|x���~��K����x):�$U���6�I �{���܃{�->����p�$I�$|���  �M�$I�$|�c�ۆm�ؒ�I�${�ۺ۰m~H    }m�$m۶I�$I�$}h�$H۶~	    }E�E�I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$|   ��9I�$I�$~   � I�$I�$I�$I�$�k�"ɒ(��}�1;�3{zU6eN��{;5�3��k�d}F�}u��-&
�|�N��2�n��?uI�z��O�$�m��?$@�N˿�x�p��'��{~?�ٔ�vv����|�(��I�$i�4�yE'pbm�~m۴-�$�}h�ek�m�{�DB%�$�y˼��6�{Ӵ�h2�{=������y�@�M'�w�����A�x4	�֧�{�R���}@ �&�{��ҕ��}6l۶$�z�"��H�}۰e۶e�x��Ʊҁz��iب��z�_��m�~yQTJ���y�Kr���yذŎ�s�{�ٺ(C��yF��yǀx�T��E�z�$I��i�z3M���y�~Eۦi�$�z�[ҍ��z� � /Q�y�N�X�y���A�{#�<�_�}�`ېm�v��-Gx�  Ц=�p��M���zc�U�t�|��e�6l�I�4h�$�}�:��Ā}�6l�`ǁ}f,�6x�~h�m۶�}Ŋm�̀H�H�$�|'@�H�$H�$�-��(� I�$I�$�~'ۂ噳�~�m'�ۄ~�bc0=��}۰���m�}޼�6�~h�6iӦ�u�do��L�~���^l؇��r.�n�~mQm�6�~�m�{�~h�h���hQ@�6�I�$I� �~��m�I�$H�$��lv�e~      �}N�v��a�~ ڶIҤ�)�P�~h۶i۴�~K��m���~E��m���|#��#=2�}۲a۰�{�Ȏ��}h[�EТ�s�	Ƃ/��|-������|e���I�y���o�}�y/x��{�@r�;�{s�.�w|  `[6̃z�90$�u�|�mm<w�z��鴃{���m]�{oߖb�	�N�$q��u+
�,=��a��P	��w�+�Ȇ�~��_R
��_ঢ়j���z�^.e;r�~ܯ=�Ͻ�v'�r�˳�}�s*�
��{$T�{>�}���!�Cz $H$���{r\�n-��|� ��n�zӶi4m�~m۶hڶ�z�0
�q�|X�-Æm�w�H
$�L�~v'Ib؅w]S�-]��~3��s2'�u�n�ֵ�{��$#�j#5{�	��sP����N�y�5����h�S��4	�y��A)囊d���) �z���:��g����H�~���$���v��dъzi��}ۀx�$I���|��о��u�I��$�z��z����t�$A۔��}[�ɲv{   ��$�z9���q  ��<�{��'�q�$H���z+׮��z%K�D��|49����{�m�pm'�z-I�]�ly��q�8l�{b�h�}{)Z Z �v�$iԉ*~r�$I�&�zi���f�t��M�y��mmt  	�G2�z+���.��u�$H��O�z��a۶�~m��m��{�|wZ�v�59��x����֫�x[�����zն����{E!��{�.<��z۴m�H2�{B T�J��{$I$���|�tQ��7�}یm�l;�qл)
�z t��zdo�!Y�x���(A�{��H􈁁|O�I��|�ZϹ��{��&/	�~����{�z tIͩ��{�ޚtp�z�@r%���w��!���{�(	$��nӼ��0�{��Y�_I�W>��z�>���=���?��|u��%ظ�}�B��Ӂ~��سmۇ~������})�-� �z.뛡�z�|$A�"C�|m�vk;�|"I�%��}��ض�y�I$H�$�}vl;��ЀII�}<J�=۶�I�$H�$�|Ng[!�~v�ؘm�z�Vf�fI�4I�$�qb���5z~y �Y��zSS�-��x�T�do�}	V[WI�$I�$�z푞��z�0S���|�A��Y��{۶A����|�ʵE���|,ْ<ȼ�|k�}-a6�~m�"E�$�z���G��~h��-ڶ�x�<�ö��I��I�{s����PW�zX����:�{qD����~x�lr��zr*Ԓ���ztO��Y�}ES����I�$	$�z㴅[�N�I��I�&�zmЮMk��}�ҶE۶<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use IteratorAggregate;

/**
 * @template-implements IteratorAggregate<int, ExtensionBootstrap>
 *
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
final class ExtensionBootstrapCollection implements IteratorAggregate
{
    /**
     * @psalm-var list<ExtensionBootstrap>
     */
    private readonly array $extensionBootstraps;

    /**
     * @psalm-param list<ExtensionBootstrap> $extensionBootstraps
     */
    public static function fromArray(array $extensionBootstraps): self
    {
        return new self(...$extensionBootstraps);
    }

    private function __construct(ExtensionBootstrap ...$extensionBootstraps)
    {
        $this->extensionBootstraps = $extensionBootstraps;
    }

    /**
     * @psalm-return list<ExtensionBootstrap>
     */
    public function asArray(): array
    {
        return $this->extensionBootstraps;
    }

    public function getIterator(): ExtensionBootstrapCollectionIterator
    {
        return new ExtensionBootstrapCollectionIterator($this);
    }
}
                                                                                                                                                                 �t�v��M�y�6i�VI�s���5�x�{��N\K��B�#̒,��}��O��L��
��
�|����'����'�yP]���'�u�7�sD��x&�Ο��w�emw�~�yvK�H2�u��i��{4R#���y���zv�~�#��؃|ݒ���I�$I$�z!v#�5�~mۢm��|vˌ��I��`�{"��c�-�;v��|�0��H�$H�$I�$I�$I�$I�$�~m�6Ҷ}h    �~m۶mѠ}IҶ   �}۶m�,�}Ib�۶�I�$	�}IҶ   �I�$I�$}I�   I�$I�$I�$I�$I�$I�$I�$I�$�I�$H$~@$   �~m۶i�}Iڶ   ~     I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$~     I�$I�$I�$I�$I�$I�$�I�$I I�$I�$�~m[$hЦ{k�m�  �I�$H�$|0    I�$I�$I�$I�$�|$B*�L.~@    x]��{=I��m�&iI'mv��q{|t�0v����}�K�`w�n��me�:�x~�ڣ֑f�I-�$�{!x�nݲ�c�i$�'�zX-�
K��b�I�<�w�ɣCрf  I#�܀w��1f|f 	�f?�{��;u�~f� ��<�y�I*��~j�$���q�(�#��~q$I�z;�x���k�~g� ���z(ɵ~s
{e I��}m���{g  A����z�ہ�M�}v�q���z�[�"�6~x�;�`�sD�k*�V}x
Ϧm���x�#i��x%�$��m�x�ۺB[�y���ɹ?�|���v+�}w& ��vK�x�N$Az}x��$J"
�z�̖h��}w�v;�	�y�S��r}v�e��zo_Aj��}u�@�喖�w�Fs�|(}n�4 �4'�|����]�~j ���v��I�	�j�I���r#�l|�y�m9m����}�߹�ހp   ���|�I���u$A���zH۶mm��z�DI��M�}dIe�?�~-�6m���t�ބݱ�xYjN�܄}�NXa}��}m�6�m'�w����5y�$qM;�u��Nx i����Us��~x  N2��i�Գ3�y   �'�P�h�y�I����~�f��e�{�$I��?�~��n��"x    �>�} 0��dr   �V?�}$O�>�p   ��'�~~�<�킀k  ��$�zt�n���k H��?�yD�ڈl  @"��s�O�3�~n�I,��}�_�\S̀u�$�$�|�<.�ނw��ik���|h��W�zp*���z�`7
�{ӶM��{l�M�^�}�ضޚb�z[Y�Fǜ�{4�j;:�tR�A-Ѽ�`� M��>�t��`�m�]  h$��{dh:�1�jڰM�o�s�Z`j�x3��L>ǌ|mb�4Z�~y��dX��z��Mӌ��|m��$��{Pm�S�{ [�&�z-C�J��{� I$�$�|/ص�ށy۶m��;�uZF�5��x�n��$�x+��;�΁u�i�v;t(�V�G�h�A�H?�lt�Iu�}l��mn�܎~��5j�d0j�k?�{�]/��Z I%�?�{qy�W�W�I#�$�u�;�e���T��I$�<�z����}P�M��$�w)9j%'!zL  ۖ$�zv�m�zN `m�$�vnc���zNд��ہt'l�rzZ   kۋo,��l��yM `y?�}�d'��oJ  Id�$�}���qD  I۔��|����{c$ �����sӴ)��m}n��-y��u��q�0�}k��A�즋smY�cY�}j$�ޜ�}�����7|o	�Ӷ�y��TuK�|m���l�znʾ$跀q�Jm�&�{���Ƹ�q��m����y$�QX�as� �.�{�zo��ow�۶&V6�xB/�ݘ�}w�Q���x�֚d�~x�-�$��{��I��s~x$I���܁{��q��-y�4	���z�JmY��{�$I�?�}3���Āy�$A�o�{$؊��p�I�$I$�}�阾�	}h  ��|\|�7΍�{yO��DI�~1���l0�{�IB�$��f�*�ز�p  @�$>�^~�TO�r~r�(�o��.ц�j�l�`w��>�}���~��m� @ܖ��}���oc��k H��?�{toYs�k Iۖ�z��Qt��~l� iۖ'�x,9���c  #�'�|�<6gz`   ۘ��ziٲ��b   l�'�zeͭ��a�b   ,�$�wg�.;Ne $Im��v�y�5�|k 	����En��q�@n��'�zn��z��p  ���|�
;u7�~t  �ۊ|&�����~x� lS�{9z�𿶀{�K��<�|�R�h�ymѶ%�?�w$��Д��f I�8?�{lC�.
��b�I$��}it�����j�h�s�|m]���~v-aw}�>�}k�-��~y�Bd��y��6��xP
m�&�z��lXQ�z�6l���|}��ټ�~m��m�$<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use function iterator_count;
use Countable;
use Iterator;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @template-implements Iterator<int, ExtensionBootstrap>
 */
final class ExtensionBootstrapCollectionIterator implements Countable, Iterator
{
    /**
     * @psalm-var list<ExtensionBootstrap>
     */
    private readonly array $extensionBootstraps;
    private int $position = 0;

    public function __construct(ExtensionBootstrapCollection $extensionBootstraps)
    {
        $this->extensionBootstraps = $extensionBootstraps->asArray();
    }

    public function count(): int
    {
        return iterator_count($this);
    }

    public function rewind(): void
    {
        $this->position = 0;
    }

    public function valid(): bool
    {
        return $this->position < count($this->extensionBootstraps);
    }

    public function key(): int
    {
        return $this->position;
    }

    public function current(): ExtensionBootstrap
    {
        return $this->extensionBootstraps[$this->position];
    }

    public function next(): void
    {
        $this->position++;
    }
}
                                                    �z&B��ʭ�~q`#�cۂv�q/�fS|f{s �U�,�.1�}6�l���B7p1�y�-�Ӌ��{���r?z��dߧ�z;ϊ��}v�	��v厶k�xx���FH�wj#Փ�I�z!TJ܆��r�L��n�~O�����z�҅.	ځI�4M���}v�R�i~    � �zB%�����~�{�gۃ~Z���7�~-�6)�|1���~h۶i۶I�$I�$I�$I�$~@     �	�$I�$�~Ҷm۶I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$~     I�$I�$I�$I�$I�$I�$~@     I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$~     I�$I�$I�$I�$I�$I�$�A�$I�$I�$I�$�~)Z�m۶I�$I�$�}K0���m�~-�m۶�{�bn�J��I�$I�$�H�$I�$I�$I�$I�$I�$I�$I�$�w*ɒ,)}   ��c~�	vU`ڠ>�uN:��4AwS�r��$�~I{�n-�wQ��mv���v�D�+;2j[�A��x�P��c�h\�/���Ćz[ǲ�ChZ�ߒ����{��U��i\������w�)��#'hX��m��?�wԐV?��dR�����'�{(�d��bM�����'�z�îЖMcJ����?�x�]zX	�dI�DJ��'�x}k?�FKdC  I��'�x�i�aB ���$�zd���L�r=ж�$�{��V,D�r> жI�$�vy-��V}>Жɟ$�z����}7�> @���$�u�)�6�~@ Ж��$�v�ι�'vB�����?�s+h-;1n@ P�I��y�>i:����cۆz?����b7���Ibۊx���*��c3 ��Ib׏sqo�n[^2�p�I�քs�f/3	�X2��yޒ�sܘ�G�K8����CR�zm�-��U:�`�y>R�}g�]>����?	�y��m��gB����	�~�/w��3sH���ɿM�|���wk�vQ ���=N�~D��I'uZ����/	�z$C�$��z`�����q�tl3��Myg��r��M�v)�v�6	|tdJqۖ�}��|�{s���ۨ�~ )���}p��?�&A��g�\�|m��' �~�]��a}l��$��~�o��Fozm��ܶ��y���biwl�Ӓ�$	�y��I��'{f�S��&A�z$�Q��zc��m�z\=���qf�/	�D��| �>�@6qf�I�ԑ�x�x��&qh�	- jӉz��&��nb��󣍆{�U��f[������|K��{�hT����ڇz��A���kOP��㶈z�Γ�K�oI ��Ғ�wh"�'�lG����O��h�G�� 	dR�񶍇{>��k�qm[�?	&�$�tb
��JVxW��M��$�q�P�v[�{W�4����y�*���yM���Ob��y inq�1kN �$�C�x���z�wG���O�ց{#'���xB ��O޶�wܖ�"D�pG�f��߶�|YΑ���dN���㶅vc��:nbM��Oܑ�wN8�@R`R��ˑ�lM��ڠmqU�Pn����y��'+)�sT��mɟ$�z�ʜ�nscRZa��'�{$��q�[L�mu�ڐx]��Y`X@��uK?�{��۰�Y;�Hm�'�sR[(mU8 h��$�p'	�GgR7 �ѭ���v�Z�u��G3��vbs�v.We��?2 ��y+�o�o��H4-�۶Oځ{!!ۜvAN2`�O���~'��ɟ<N1�j�I����d2d��S(��Obۏ~�c�H_(���I���n;��n*���I�?�}����c?n+�`�I�$�t��!ߨ�q( `���$�y.۹k�g+�P�����t�ZA4��d4 `�I���z�WE�	�g7 d����yL+ؔj�l=�In��w�#�]pA `�In��zK+uh�rK��ۆ{>٧��rP����ۄxz�9�ZjX�`'�Ӷ�y�]-��mTp��S��vm]Y3sQ`�Ob��}�ڶ],rP `�I޶�z��M"�MtR`�IҶ�}��<�'�rS `�Iⶃ}�e�#l;rR `�IҶ�w�qܘtR ��IR�lk��#mnU�h�yY
�k1WJ�Mzj�n�۲�z��x�m�xgX�9m�I�y`Ͷv��|Z��?$)�{uI��{Y���$	 �|�9{X*{\I��� �{��:t�|]I�$$	@�xɚ�b\y���&�{��ZJ\�o�� �|�k�O�`I޲ 	�z�1z�8:�ayҒ$ �z����bI޶�@�y�5f�{gy���A���P�l�<tg�_'���{�(�b��q_u�'���y�7���xkY���3��{�8@&�oR���~B��|iW�<٦qMP�OҶ�{�o��#�oL�жIޖ�pNZ�$)@jT��r1�m�z-�D�U�f_y*��8I�r��Jtb�p�Ob��y)`of�xZ @��cۊw�M6�_;rT ���Ӗ�z��K4ѻmS�d�y2I�~���6Q�pS���3��}Oۘ=�qQ `�yҶ<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use Countable;
use IteratorAggregate;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 *
 * @template-implements IteratorAggregate<int, File>
 */
final class FileCollection implements Countable, IteratorAggregate
{
    /**
     * @psalm-var list<File>
     */
    private readonly array $files;

    /**
     * @psalm-param list<File> $files
     */
    public static function fromArray(array $files): self
    {
        return new self(...$files);
    }

    private function __construct(File ...$files)
    {
        $this->files = $files;
    }

    /**
     * @psalm-return list<File>
     */
    public function asArray(): array
    {
        return $this->files;
    }

    public function count(): int
    {
        return count($this->files);
    }

    public function notEmpty(): bool
    {
        return !empty($this->files);
    }

    public function getIterator(): FileCollectionIterator
    {
        return new FileCollectionIterator($this);
    }
}
                                                                                                                                                                          �zq[��Բz�J�S��w��`Ά��{%�g��T�-��{�T�˦�E9���{BḄ<֠}x'��zb�k�<�{����?��u��	��ԃyoA&�60�y`�M$��z�:���{��u��āw��I�~i�m���}.6�I���~mڴ-ж�}��w�g��~h�6mӢ�z�K7��6�|�H!�S�z.��M�ڀ{RC�+Qw����P}�P I�$I�$I�$I�$I�$I�$I�$I�$�~m۶mڢI�$I�$�|۶m��t�I�$I$�~m۶m[��I�$I� �}۶m6gI�$I�$�I�$I I�$I�$�}۶�c�I�$I��}���0ĂI�$I2`�}m��Ð��I�$�`�}m��s��I�$-
 �}m����a�I�ض=�|۶��f�I�$v �{�$H�R�I�$I��|۶m�楁I�$I��I�$IR4I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$I�$�n 
� ��I��I�~E-��P�Y~b��F�x�@�x��XIb�� �yT�~���SI��� �xb9��X?�TI��� �}�������WI��#	 �k �ں5�YI�'$	 �b�$	��K�QI��lm�yer��?a�MI��-9�v�}�%f	�SI��� �}R�	��\I�r @�s��9�*��`I�m  	�x$�����WI�m   �{vB@y���WI�m   �zO�j���eI�I  H�m��"��fO"I  I�mб9���YO"m   �p`�y��QI��   �o)`����MIҶ� �y�w
lH��PIҶ� �t�C�H��WIR�� �m�:
%�;�\I޶�@�x�۶��n�hIҶ� �o�Ǧ\�	�eҶ�$	�~����=8�dIR��$ �iT��`3��fIRے �_��i���eIb��I�l!Ɍ��k�rIb�mH�~��γ�4�q��۵@�p�A� �zI���h�}s�C���|I���H�y��a�0�}I���`�y\I��F�~I�$�h��s����~I����	�z/ɔc)�}O���=�zS[r�&�{O��-@�}�6J��|y��� �~��,J�}���"�~۲�[a{�z���I" �}�}��@,�z���I"�~�_ޯ� �{���I �|����3�|��$O �z,eN�6ŢzO���@�x$+͂N�|I������p�λ��nu���4	�qTVuZǥd�?$9�y�:�/���^O�$l �{�Cn�f�Z��$�-	�y���$4�Y��$�+�siɶ�r�eI��m	 �z����:Y�hI��$	 �y��y��hI��$	 �z\�SF��eI��$	 �ya��ڊQ�eI��$	 �{�ة��iIr�� �vc�5[��eIb��@�s�Kh$�8�c�_�	i�s ����n�=nb�Ձt�06��rmh��yv���w�n'	O�1�s�[�`��_l;%�$�zz&Аb}�]m #��n�&A��Q�immd���xc���yI�d떆{b����v�y��Id���{4���l�w�$ɶ�uuiڿ��q�h)a�{��T�)��c~�� �u��ԛ�A�bIR�0n�z�m?�H�^IҶ��	�q������M���&�i�Ƒek;�<I��� �B�i�?In�d͋g��V&���'�y�nӈnU&   ��$�}v`�6��]&$A��$�o��E�HW)�  ��$~p�M��	_' ��'�|0�^a^$   ��$�}a���I�]$   ��$�z������Z"�@��$�{@'�o�N"�I��$�k�"-� M#�&	��$�j��H�@H$	H�$�y�A5`�T%�4	m�$�xv�z�N^&�$���{y�����*��	���yO�����=$) ��ߐz��:�\B�`n����t���M��vI�i�M�t����x�qI��  �uml�V�p�On�H�zd#y�9�w�?I  m�w&�匍�zI@ �m�v݆��ו{�#I���|a��Ϟ5�x�i#�$�yyr{`ڊx�h�$�y�{Ř8I�x��%���y��m:P�x�/	ܔ��x��x�Ց|I.H����w�E6�Gh�~�#	ж�{%��s��I��քzЯ��2���@�P��u-�~���~u����A�x;p����~�����{52�֭�|ۺ��m�}v�{�[�{ �.���}����Kvt�I#�:�}��[T�o� @$�'�|���m   $�$�y[��~O m &Mm�؀uًZ�	w+��o�|�Ý��w�ߒ,'A�w�2��&�yIRN� h�u�D;�A�yI�I���sG�u�яxI2��DN�w�t	���tI2�  @�{�:����t���I�}����	��tI�m   �{%e7c1A�r�   I�x�u�c<фpI�I &	�}NB�y<�sIҶm[�z��:w��t���n;�{j�V}!0�y���m)�z�u����xI��$	 �vV@�Q�wI��l <?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use function iterator_count;
use Countable;
use Iterator;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @template-implements Iterator<int, File>
 */
final class FileCollectionIterator implements Countable, Iterator
{
    /**
     * @psalm-var list<File>
     */
    private readonly array $files;
    private int $position = 0;

    public function __construct(FileCollection $files)
    {
        $this->files = $files->asArray();
    }

    public function count(): int
    {
        return iterator_count($this);
    }

    public function rewind(): void
    {
        $this->position = 0;
    }

    public function valid(): bool
    {
        return $this->position < count($this->files);
    }

    public function key(): int
    {
        return $this->position;
    }

    public function current(): File
    {
        return $this->files[$this->position];
    }

    public function next(): void
    {
        $this->position++;
    }
}
                                                                                                                                                                                                              �x�4�"���}�S�m�b�v�m�()|�6l d~V�"��"�w[ֻ4��F1p)��}��:]O8�xp����w(	M�6�v�62��zK2q��a�w��]���wν>$a�x)���y���ضm�z%5F�P�~Μ̶؃z�2;�<|�}]���:�|�u�!6S�|ۊm�t�z�S����|L���O�}�����~m۶h�4~`��M���}�}�o��t�$I��M�I��yB
�}���Ejc�Iҷ-	=�}m�$�S������ہ{�0o`�~�=m����}b���D�~��kǂz��r�7��N��$�{i��nCX�I�Xg;�|���ڃݶ���$�z�O�l�����ɓ�zkz	TG���I���z^K�u�R���&�yD�Q� 6�X�$I�&�{mc�%P�~$п�?�{��	#Gn� f�I�$�xlz$4i�~�P�vlۀz�p�?H�u��ɐ$�z�Ȃnǰ�I�m�'�I�$���H 	 �I�$I��I�$I�$�I�$I��I�$I �zws��J��ɑ���߇`�9r�L�~�I�$�z��r(�5� ВI�$�}�g�m֠�~ @�I�$�zӕC5�� @�I�$�{����z�~ @�I�$�b"/-�i�~ @�ɟ$�:���|ͅ;ַ�?���P�=�i�m��$�oT��3��g�D�I��q@��ݒ�l�������z&������n �'�oۓ���?�k��$�c��tͽ�Xo֮_ ���$�tOn��o��a Զ���s!Vw�8r�u�`�����ws��V��x�����?�q6Î9��x�ɟ$�t�\�rI�xP���$�wf徙�-�} @�I�$�u�1Fm�} �m��$�\��@#�ʀ 0Iv��J�`���Ƙ�&���?��|�'t̕�PN��$���5��Ԃ I��$�t-�	8rՀ  m��$�[t��$I�  ��$�n�Yvъ�}  $�$�z�M;s��p� $�?�u`���ɶ�r� $�$�y�]��x��u�@��$�udB��i�u�Hv�$�^5�L&�t	�ܖ���w�m�a�}�@Nm�?��������u $mbہ}i; �͛t �mIb��wlٶ��o �mOb��~���~���r �m��ۄ}n��[��z@�I�$�}Ds�b��{@�I�$�}���$	��{ @rɟ$�zh��쮴{@nI�$�om���i�z �m��$�F-׿r��}��nקx�{1�A��ɝ���A�q�#��J��s�0	c�'�my��)��j   ��$�u'`S����h  H��$�tж��C��i �����x�j��k��o ��I���x�®$6c�p `�I���u�W��Jn�v `�����{���]tƀ `�ɟ$�y1F��KSŁ�d���$�{�N�⊺�������oZC���r�������~k�뺣+h���j��_��X��[���C�@	�x�3����Ʉ�o��$�v��͓haˍ�c�� �z喷S��sOB��  �v�n�C��tIB�  �}|s\=���|IҶ   �x�Ќ���}Ib�  �M $�5̀Ib��@�C 	ܔ�{O�'���y�m���b�~ɟ$�{�sdi�v) �q����$ �}5�
����l��  �����ъ��M  m�}�̣��я�$�d'�Z[��#�Ӓ  �] �-���&Ӌ���H�~(N��N�>}2�   �m Y�-ٴ�5IҶ  H�}�n�ǟװ5IҶ �m�|���a��5IҶ� I�j��'}��6IҶ �	�i�0II�4IҶ   �y*;v�H"�4IҶ   �j��H��/IҶ   �dlI�����/IҶ� �n�$A�4-�-IҶ� �~���qC�.IҶ� �i$��x>>�.IҶ� �Z��Vq�'�-I���@�jve6�-I޶�iɗl����ك@�]��$	��I�w1i�\�o��F���-���}�]��H�y�/4�:�yY
��>�|~	މ辬�$) ��$�y���퓓���@���v6�|l���@���o����ն��I��s%����
��"I @��y۲�;���I"I @��x[:�?q��I"I ж�|����b��I�I �ڇ}�_������/I�dۃ{.�:-ۖ��"@ ���y��8ER��I" ��?�z�퉦�T��I ��y�o�nt��ɳi����v������IBnЖ�w9���I�m @��x����ʠ��O�m ���{:��2��I�m @r�x�vU����I2I �m�|�j��ʻ��I�m �m�xe�ry����I�m �m�|kY�hm7��I�m �m�xP�IkJ���I�� �m�x B�m#���IB� �m�J  I��>��2��*��`�&A�j����{?�y�o6������O|�wn;e/���ɟ����z�vrs耸�OR�  �z-��.뙸�IҶ  �zd������I^�  H��qk7�����M����}��`_絀 il�'�~�F���� 0���$�{�M66�� жI�$�z��
]��yж��'<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
final class FilterDirectory
{
    private readonly string $path;
    private readonly string $prefix;
    private readonly string $suffix;

    public function __construct(string $path, string $prefix, string $suffix)
    {
        $this->path   = $path;
        $this->prefix = $prefix;
        $this->suffix = $suffix;
    }

    public function path(): string
    {
        return $this->path;
    }

    public function prefix(): string
    {
        return $this->prefix;
    }

    public function suffix(): string
    {
        return $this->suffix;
    }
}
                             �|���6m{�Ðn�z`�u[;��|��n��l�u�X��2i�~vSw��s�ݹ܂~��6+ �|v�S?��y�,��O�wc�d�:�y۴:���u"6�,�5~wl�j�h�3!!~z����v�����=xA�ۺh�{��h?�w��n�ǂt\%��9w�J�N��J�9P#��x9�S��T!�dA���o`��x���{���~J�<ȣ$�z]�6|���}��y�y�x�o��v� �s<ՂuIi�Mvrڧ�4A�v�X��-�{)�+��k$="�DM�z��V����s�h<̈}�����߁n\3�I��| V����p�
%T�}b�:u�?xB�&���x��K��F1�S1qS~yt�m�J�znW�j
��y�Fr!s�X��\�=})�m� �}���ڀ~h۶m���xCi6��r�z��у{uۢyٗ�{B���q�}�ӾA��|i�nݶm�z���A��I�$I�&�z۵u�q�	�$A�$�z�6h!�I�$I��x��	{q�}m�@;7}_�\̔�-�z��bz�Q1p�tj�|c-��1�}ȯ;���|w%y 9�'�w��q,�}u零"�L�{n>��p�~u�`Zg�m�{�t��x�0����w7�+��{ ��]�Ɓzs�T�N.�{T�lI
�{�nou@�{��9؂�z#őڄ��|��mݖb�yb��Kɀ{)��:���Vb�9H�}��y�w�i��/���IRr�q�tw�N���B��Pn�l��X��漀��� 4�w����Ib�� �d @[�;��Ib����q�6M�w��I��	H�}j������I��m)	��I�?1��I��  �}�Ҷ쇧���_� ��~㢦x����]r� m�w�͇����IBn�В�z$�n^���I�m @��l����3������ �M�t�n��D��IB��$ �j�D��ǳI��� �~�ݻ���~I��m+	�x�]7���Ir��@�{v�&ț��IҶ�@�}��DM����On m�|�g�w���I¶Ш���/�_:���3'�3?�}JRw}ǁ|�/>dE��ysMِ�z��3�=l�{mK$��z��>m+	�~y�>F��|�I�ف}�Z�݊x�}öm�{�tزU��̀|k�«�:z5��G�7�za�׮y �R/4�oM>r�6�w�s�$@t��V�$�z_.��)@�|M߶$H��ym��́~����كwز�k7M�yvC��PR�u����	�n�����t?�X�]ەrI��ض�{����0�x9�m�6�w�6m�ba�}mSwk�6�{6��s˕�z�I�$I�u'I�A�}Y2g�6l�|ŏ!I)�~�c۰�ĂwR�a^U-�~-ڶ(�s��W%K�x��IK5wzE�	����|�	q����a!�I�s �ڢ-:�~��>�3?�~`M�����~hl۰�n�~i۶m�6�{D7�dȒ�	�I$�~�I���}H[    �v�]Ԯ��v�l�@�w���۶�w�Kb!I��}ްyt�}��a޶m�~�o l}m�   �cX2�۳9�x	�tuW��{'���x��z���=Ƈ������}�6lۖm�|�2@� I���I���tͥ��H��o}w����B�����~I�����~m��/��~��a�mۄ}`��#��}q2'��a�~�ܬI�|��y6 �z��ƀ{O+�TR�{L�~ޚ�|��l���J`�ݢ'Z�|����?���5���t�������z�@3?I��y��lۖ�z�qȦi�u�#`�$I�}��X\��u�+I$I�{��l���w���H�|��y޼�z�T  �{��jma�|m��ۂ-�}���%��|� 6%���}7����Ԃ}Y��Z��{�Yz���~�g�fۅx���]��~�];nf�zDM���Ԅ|���K��y���&[��{����S?{ip$s��|������v؉���o��~b��~�o���j��Or��yyR;���n `����v�p�14O�u �����|{��|E��x��ɓ��x���פv��O���a�"�$H�w��I�$~3�ק{��z�̭/�ȅ.{aa�w�`w��?�rk+��?�s 0���$�q����ܾn�T���<�p.�;�??�rP�?����r�tw�ڎ}d�Ò�$@�d�J���;|UN���6Ll�>j�>�X1�p� p%�
�
�~v��뿀lD�A����7�_��$�{휶��R��@Iϟ��|��۶���� $���$�{`�-T�m���p�?��|,� ������I���|��Yz���� ��y���{�s��q�����ɓ'�}F���m������I�$�z�Hp�X�����I�$�|ya�5Y������I�$�{��/Ҳ����ɟ$Ot0 @�� �����K1�PO�t���̀�mԩb�v$��|h���ӎd�5��%��č��?�|�-���'�z�����|BS��9�z�k?����{+�]҅z���ￇy-k�[]ȅyD�鼂}����~���ɟ$�~.�r�߂|A�iۂ{1��&���|�����߁z;4�O�|����?�y��i,#��|�d�����|�K��q�{����_��z���m-�|T�n�$�{n3r[kp�{�ж���}��:��2�{�D����|����9l�{䶯���x�����p�4&�OI�e�4H[=:�\��?l-�o�ݶ��U��O��z������p�`�q��zdϦ��2�~��?I���w��g��� �?I�$�yT��đ�| ������|&}��%�~d�I�$�y����i��|�d�����z+�n��ʒ~��I�$�z)ɕ>ț�{�`��'�J�51�zd�����H)�n�������i���n�